import { createFileRoute } from "@tanstack/react-router";
import { PlaceDetails } from "@/components/PlaceDetails";

export const Route = createFileRoute("/places/$placeId")({
  component: PlaceDetailsRoute,
});

function PlaceDetailsRoute() {
  const { placeId } = Route.useParams();
  return <PlaceDetails placeId={placeId} />;
}
