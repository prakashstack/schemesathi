import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Clock3,
  Compass,
  CircleDollarSign,
  ExternalLink,
  Globe,
  Lightbulb,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { formatDistance, readCachedPlaceContext, saveSelectedPlace } from "@/services/places";
import { getPlaceInsights, type PlaceInsights } from "@/services/placeInsights";
import { CATEGORIES } from "@/types/place";

type PlaceContext = NonNullable<ReturnType<typeof readCachedPlaceContext>>;

function DetailItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border bg-card p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <div className="mt-1 break-words text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}

export function PlaceDetails({ placeId }: { placeId: string }) {
  const navigate = useNavigate();
  const [context, setContext] = useState<PlaceContext>();
  const [loadingPlace, setLoadingPlace] = useState(true);
  const [insights, setInsights] = useState<PlaceInsights>();
  const [insightsError, setInsightsError] = useState<string>();
  const [loadingInsights, setLoadingInsights] = useState(false);

  useEffect(() => {
    setContext(readCachedPlaceContext(placeId));
    setLoadingPlace(false);
    setInsights(undefined);
    setInsightsError(undefined);
  }, [placeId]);

  useEffect(() => {
    if (!context) return;
    let active = true;
    setLoadingInsights(true);
    getPlaceInsights(context.place, context.nearbyPlaces)
      .then((result) => {
        if (active) setInsights(result);
      })
      .catch((error: unknown) => {
        if (!active) return;
        const message = error instanceof Error ? error.message : "";
        setInsightsError(
          message.length > 0
            ? message.slice(0, 300)
            : "The AI guide couldn't be loaded right now. Place details and the map are still available.",
        );
      })
      .finally(() => {
        if (active) setLoadingInsights(false);
      });
    return () => {
      active = false;
    };
  }, [context]);

  const mapUrl = useMemo(() => {
    if (!context) return "";
    const { latitude, longitude } = context.place;
    const params = new URLSearchParams({
      bbox: `${longitude - 0.015},${latitude - 0.01},${longitude + 0.015},${latitude + 0.01}`,
      layer: "mapnik",
      marker: `${latitude},${longitude}`,
    });
    return `https://www.openstreetmap.org/export/embed.html?${params}`;
  }, [context]);

  if (loadingPlace) {
    return <p className="mx-auto max-w-6xl px-4 py-16 text-muted-foreground">Loading place…</p>;
  }

  if (!context) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary">
          <MapPin className="h-7 w-7" />
        </span>
        <h1 className="mt-5 text-2xl font-bold">Place details are no longer in this cache</h1>
        <p className="mt-2 text-muted-foreground">
          Return to nearby places and open the place again to load its saved details.
        </p>
        <Link
          to="/places"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to places
        </Link>
      </section>
    );
  }

  const { place } = context;
  const category = CATEGORIES.find((item) => item.id === place.category);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <Link
        to="/places"
        className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to nearby places
      </Link>

      <section className="mt-4 overflow-hidden rounded-3xl border bg-card shadow-card">
        <div className="relative flex min-h-64 items-end overflow-hidden bg-gradient-to-br from-primary-soft via-card to-secondary p-6 sm:min-h-80 sm:p-10">
          {place.imageUrl && (
            <img
              src={place.imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/15 to-transparent" />
          <div className="relative z-10 max-w-3xl text-white">
            <p className="text-sm font-semibold">
              {category?.emoji} {category?.label}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {place.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/90">
              <MapPin className="h-4 w-4 shrink-0" />
              {place.address ?? "Address unavailable"}
            </p>
          </div>
          {!place.imageUrl && (
            <span className="absolute right-7 top-7 text-7xl opacity-20" aria-hidden="true">
              {category?.emoji ?? "📍"}
            </span>
          )}
        </div>

        <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
          <DetailItem icon={MapPin} label="Location">
            {place.address ?? `${place.latitude.toFixed(5)}, ${place.longitude.toFixed(5)}`}
          </DetailItem>
          <DetailItem icon={Navigation} label="Distance">
            {formatDistance(place.distance)}
          </DetailItem>
          {place.priceLevel && (
            <DetailItem icon={CircleDollarSign} label="Price level">
              {place.priceLevel}
            </DetailItem>
          )}
          {place.openingHours && (
            <DetailItem icon={Clock3} label="Opening hours">
              {place.openingHours}
            </DetailItem>
          )}
          {place.phone && (
            <DetailItem icon={Phone} label="Phone">
              <a href={`tel:${place.phone}`} className="text-primary hover:underline">
                {place.phone}
              </a>
            </DetailItem>
          )}
          {place.website && (
            <DetailItem icon={Globe} label="Website">
              <a
                href={place.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Visit website <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </DetailItem>
          )}
          <DetailItem icon={Compass} label="Coordinates">
            {place.latitude.toFixed(5)}, {place.longitude.toFixed(5)}
          </DetailItem>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="overflow-hidden rounded-3xl border bg-card shadow-card">
          <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
            <div>
              <h2 className="text-xl font-bold">Find your way</h2>
              <p className="mt-1 text-sm text-muted-foreground">Map location and directions</p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Navigation className="h-4 w-4" />
              Directions
            </a>
          </div>
          <iframe
            title={`Map showing ${place.name}`}
            src={mapUrl}
            className="h-72 w-full border-t sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <a
            href={`https://www.openstreetmap.org/?mlat=${place.latitude}&mlon=${place.longitude}#map=16/${place.latitude}/${place.longitude}`}
            target="_blank"
            rel="noreferrer"
            className="block px-5 py-3 text-xs text-muted-foreground hover:text-primary"
          >
            Map data © OpenStreetMap contributors
          </a>
        </section>

        <section className="rounded-3xl border bg-card p-5 shadow-card sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                AI-powered guide
              </p>
              <h2 className="text-xl font-bold">A little local insight</h2>
            </div>
          </div>
          {loadingInsights ? (
            <p className="mt-5 animate-pulse text-sm text-muted-foreground">
              Putting together helpful details and nearby ideas…
            </p>
          ) : insightsError ? (
            <p className="mt-5 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
              {insightsError}
            </p>
          ) : insights ? (
            <>
              <p className="mt-5 leading-relaxed text-muted-foreground">{insights.overview}</p>
              {insights.tips.length > 0 && (
                <div className="mt-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    Helpful tips
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {insights.tips.map((tip, index) => (
                      <li
                        key={`${index}-${tip}`}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 text-primary">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6 border-t pt-5">
                <h3 className="font-semibold">Nearby ideas</h3>
                {insights.suggestions.length ? (
                  <ul className="mt-3 space-y-3">
                    {insights.suggestions.map(({ place: suggestion, reason }) => {
                      const suggestionCategory = CATEGORIES.find(
                        (item) => item.id === suggestion.category,
                      );
                      return (
                        <li key={suggestion.id}>
                          <button
                            type="button"
                            onClick={() => {
                              const cachedSuggestion = context.nearbyPlaces.find(
                                (candidate) => candidate.id === suggestion.id,
                              );
                              if (!cachedSuggestion) return;
                              saveSelectedPlace(cachedSuggestion);
                              void navigate({
                                to: "/places/$placeId",
                                params: { placeId: cachedSuggestion.id },
                              });
                            }}
                            className="w-full rounded-2xl border p-4 text-left transition hover:border-primary hover:bg-primary-soft/40"
                          >
                            <span className="flex items-start justify-between gap-3">
                              <span className="font-semibold">{suggestion.name}</span>
                              <span aria-hidden="true">{suggestionCategory?.emoji ?? "📍"}</span>
                            </span>
                            <span className="mt-1 block text-sm text-muted-foreground">
                              {reason}
                            </span>
                            <span className="mt-2 block text-xs text-primary">
                              {formatDistance(suggestion.distance)}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    No other cached places nearby to suggest just now.
                  </p>
                )}
              </div>
            </>
          ) : null}
          <p className="mt-5 border-t pt-4 text-xs text-muted-foreground">
            AI suggestions use nearby places already returned by the places search. Always confirm
            important details directly with the business.
          </p>
        </section>
      </div>
    </div>
  );
}
