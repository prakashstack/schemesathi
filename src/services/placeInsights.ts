import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import type { Place } from "@/types/place";

const responseSchema = z.object({
  overview: z.string().min(1).max(500),
  tips: z.array(z.string().min(1).max(200)).max(4),
  suggestions: z
    .array(
      z.object({
        placeId: z.string().min(1).max(300),
        reason: z.string().min(1).max(200),
      }),
    )
    .max(5),
});

export type PlaceInsights = {
  overview: string;
  tips: string[];
  suggestions: Array<{ place: Place; reason: string }>;
};

export async function getPlaceInsights(
  place: Place,
  nearbyPlaces: Place[],
): Promise<PlaceInsights> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("AI guide isn't configured. Add VITE_GEMINI_API_KEY to .env and restart Vite.");
  }

  const nearby = nearbyPlaces
    .filter((candidate) => candidate.id !== place.id)
    .sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity))
    .slice(0, 30);
  const prompt = [
    "Write a concise, practical local visitor guide for the selected place using only the supplied facts.",
    "Do not invent amenities, ratings, opening times, prices, or claims about a business.",
    "Give an overview, up to four general visit tips, and up to five nearby place suggestions.",
    "Nearby suggestions must use an exact supplied placeId. Never invent a business or id.",
    "Return only JSON matching {overview: string, tips: string[], suggestions: [{placeId: string, reason: string}]}",
    JSON.stringify({
      selectedPlace: {
        id: place.id,
        name: place.name,
        category: place.category,
        address: place.address,
        openingHours: place.openingHours,
        tags: place.tags,
      },
      nearbyPlaces: nearby.map((candidate) => ({
        id: candidate.id,
        name: candidate.name,
        category: candidate.category,
        address: candidate.address,
        distance: candidate.distance,
      })),
    }),
  ].join("\n");

  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: { responseMimeType: "application/json" },
  });
  const text = response.text?.trim();
  if (!text) throw new Error("Gemini returned an empty guide. Please try again.");

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("Gemini returned an unreadable guide. Please try again.");
  }

  const result = responseSchema.parse(parsed);
  const placesById = new Map(nearby.map((candidate) => [candidate.id, candidate]));
  const seen = new Set<string>();

  return {
    overview: result.overview,
    tips: result.tips,
    suggestions: result.suggestions.flatMap(({ placeId, reason }) => {
      const suggestedPlace = placesById.get(placeId);
      if (!suggestedPlace || seen.has(placeId)) return [];
      seen.add(placeId);
      return [{ place: suggestedPlace, reason }];
    }),
  };
}
