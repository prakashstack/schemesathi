import { LocateFixed, SearchX } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PlaceCard } from "@/components/PlaceCard";
import { DEFAULT_RADIUS, searchNearby } from "@/services/places";
import { CATEGORIES, type Place, type PlaceCategory, type UserLocation } from "@/types/place";

const LOCATION_KEY = "nearby-explorer-location";

function describeSearchError(error: unknown) {
  const code = error instanceof Error ? error.message : "";
  if (code === "missing-api-key") {
    return "Geoapify is not configured. Set VITE_GEOAPIFY_API_KEY in .env and restart the dev server.";
  }
  if (code === "provider-auth") {
    return "Geoapify rejected the API key. Check that the key is active and allowed for this domain and the Places API.";
  }
  if (code === "provider-rate-limit") {
    return "The Geoapify request limit has been reached. Wait a moment, then try again.";
  }
  if (code === "provider-invalid-response") {
    return "Geoapify returned an unexpected response. Please try again later.";
  }
  if (code === "provider-no-usable-places") {
    return "Geoapify returned places, but none had the details needed to display them.";
  }
  if (code.startsWith("provider-http-")) {
    return `Geoapify returned an error (${code.slice("provider-http-".length)}). Check the API key and Places API settings.`;
  }
  if (error instanceof TypeError) {
    return "Could not reach Geoapify. Check your connection and whether browser or domain restrictions are blocking the request.";
  }
  return "Unable to load nearby places right now. Please try again.";
}

function LocationState({
  loading,
  radius,
  error,
  onRetry,
}: {
  loading: boolean;
  radius: number;
  error?: string | undefined;
  onRetry?: () => void;
}) {
  const Icon = loading ? LocateFixed : SearchX;
  return (
    <section
      className="mt-7 flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed bg-card p-8 text-center shadow-card"
      aria-live="polite"
    >
      <span className="grid h-16 w-16 place-items-center rounded-full bg-primary-soft text-primary">
        <Icon className={`h-8 w-8 ${loading ? "animate-spin" : "animate-bounce"}`} />
      </span>
      <h2 className="mt-4 text-xl font-bold">
        {loading
          ? "Finding the best places near you"
          : error
            ? "Unable to find places"
            : "No places found nearby"}
      </h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {loading
          ? "Searching Geoapify Places within your selected distance."
          : (error ??
            `No matching places were found within ${radius / 1000} km. Try a wider distance.`)}
      </p>
      {error && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Try again
        </button>
      )}
    </section>
  );
}

export function NearbyPlaces() {
  const [location, setLocation] = useState<UserLocation>();
  const [message, setMessage] = useState("Getting your current location…");
  const [locationError, setLocationError] = useState<string>();
  const [locationRetryCount, setLocationRetryCount] = useState(0);
  const [radius, setRadius] = useState(DEFAULT_RADIUS);
  const [category, setCategory] = useState<PlaceCategory | "all">("all");
  const [allPlaces, setAllPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState<string>();
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!navigator.geolocation) {
      const error = "Location services are not supported by this browser.";
      setMessage(error);
      setLocationError(error);
      return;
    }
    setLocationError(undefined);
    setMessage("Getting your current location…");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const current = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };
        setLocation(current);
        setLocationError(undefined);
        setMessage("Showing places around your current location");
        try {
          localStorage.setItem(LOCATION_KEY, JSON.stringify(current));
        } catch {
          /* Storage is optional. */
        }
      },
      () => {
        const error =
          "Allow location access in your browser or device settings, then try again to see nearby places.";
        setMessage(error);
        setLocationError(error);
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 },
    );
  }, [locationRetryCount]);

  useEffect(() => {
    const changeRadius = (event: Event) => setRadius((event as CustomEvent<number>).detail);
    window.addEventListener("nearby-radius-change", changeRadius);
    return () => window.removeEventListener("nearby-radius-change", changeRadius);
  }, []);

  useEffect(() => {
    if (!location) return;
    let active = true;
    setLoading(true);
    setSearchError(undefined);
    setAllPlaces([]);
    setCategory("all");
    searchNearby(location, { radius })
      .then((results) => {
        if (active) setAllPlaces(results);
      })
      .catch((error: unknown) => {
        if (active) setSearchError(describeSearchError(error));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [location, radius, retryCount]);

  const availableCategories = useMemo(
    () => CATEGORIES.filter((item) => allPlaces.some((place) => place.category === item.id)),
    [allPlaces],
  );
  const places = useMemo(
    () =>
      category === "all" ? allPlaces : allPlaces.filter((place) => place.category === category),
    [allPlaces, category],
  );

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="rounded-3xl border bg-card p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">NEAR YOU · {radius / 1000} KM</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight">Places you’ll love</h2>
            <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
              {message}
            </p>
          </div>
        </div>
        <div className="mt-6 flex snap-x gap-2 overflow-x-auto pb-2">
          {allPlaces.length > 0 && (
            <button
              onClick={() => setCategory("all")}
              aria-pressed={category === "all"}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category === "all" ? "bg-primary text-primary-foreground shadow-card" : "border bg-card text-foreground hover:border-primary"}`}
            >
              All ({allPlaces.length})
            </button>
          )}
          {availableCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              aria-pressed={category === item.id}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category === item.id ? "bg-primary text-primary-foreground shadow-card" : "border bg-card text-foreground hover:border-primary"}`}
            >
              {item.emoji} {item.label}
            </button>
          ))}
        </div>
        {loading ? (
          <LocationState loading radius={radius} />
        ) : places.length ? (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : location ? (
          <LocationState
            loading={false}
            radius={radius}
            error={searchError}
            onRetry={() => setRetryCount((count) => count + 1)}
          />
        ) : locationError ? (
          <LocationState
            loading={false}
            radius={radius}
            error={locationError}
            onRetry={() => setLocationRetryCount((count) => count + 1)}
          />
        ) : null}
      </div>
    </section>
  );
}
