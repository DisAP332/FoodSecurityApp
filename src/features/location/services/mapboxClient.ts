type Suggestion = {
  mapbox_id: string;
  name: string;
  full_address?: string;
  place_formatted: string;
};

type RetrieveResult = {
  label: string;
  lng: number;
  lat: number;
};

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string;

function assertToken() {
  if (!MAPBOX_TOKEN) {
    throw new Error(
      "Missing VITE_MAPBOX_TOKEN. Add it to .env.local and restart dev server.",
    );
  }
}

export function newSessionToken(): string {
  // session_token groups suggest/retrieve calls for billing; UUIDv4 recommended by Mapbox :contentReference[oaicite:5]{index=5}
  return crypto.randomUUID();
}

export async function suggestAddress(opts: {
  query: string;
  sessionToken: string;
  bbox?: string; // "minLon,minLat,maxLon,maxLat"
  limit?: number;
}): Promise<Suggestion[]> {
  assertToken();

  const { query, sessionToken, bbox, limit = 6 } = opts;

  const url = new URL("https://api.mapbox.com/search/searchbox/v1/suggest");
  url.searchParams.set("q", query);
  url.searchParams.set("access_token", MAPBOX_TOKEN);
  url.searchParams.set("session_token", sessionToken);
  url.searchParams.set("country", "US");
  url.searchParams.set("types", "address"); // keep it address-only :contentReference[oaicite:6]{index=6}
  url.searchParams.set("limit", String(limit));
  if (bbox) url.searchParams.set("bbox", bbox); // bbox param supported :contentReference[oaicite:7]{index=7}

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Suggest failed: ${res.status}`);
  const data = await res.json();

  return (data?.suggestions ?? []) as Suggestion[];
}

export async function retrieveFeature(opts: {
  mapboxId: string;
  sessionToken: string;
}): Promise<RetrieveResult> {
  assertToken();

  const url = new URL(
    `https://api.mapbox.com/search/searchbox/v1/retrieve/${encodeURIComponent(opts.mapboxId)}`,
  );
  url.searchParams.set("access_token", MAPBOX_TOKEN);
  url.searchParams.set("session_token", opts.sessionToken);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Retrieve failed: ${res.status}`);
  const data = await res.json();

  // /retrieve returns FeatureCollection with geometry coords [lng, lat] :contentReference[oaicite:8]{index=8}
  const feature = data?.features?.[0];
  const coords = feature?.geometry?.coordinates as [number, number] | undefined;

  if (!coords) throw new Error("Retrieve returned no coordinates.");

  const [lng, lat] = coords;

  const label =
    feature?.properties?.full_address ||
    feature?.properties?.name ||
    "Selected address";

  return { label, lng, lat };
}

export async function reverseZip(opts: {
  lng: number;
  lat: number;
}): Promise<string | null> {
  assertToken();

  // Geocoding v6 reverse endpoint :contentReference[oaicite:9]{index=9}
  const url = new URL("https://api.mapbox.com/search/geocode/v6/reverse");
  url.searchParams.set("access_token", MAPBOX_TOKEN);
  url.searchParams.set("longitude", String(opts.lng));
  url.searchParams.set("latitude", String(opts.lat));

  // Optional: limit result types to postcode/address to reduce noise
  url.searchParams.set("types", "postcode,address");

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Reverse geocode failed: ${res.status}`);
  const data = await res.json();

  // Geocoding v6 returns features with a context object; we want postcode.name when present.
  const feature = data?.features?.[0];
  const postcodeName =
    feature?.properties?.context?.postcode?.name ??
    // fallback: sometimes postcode feature itself
    (feature?.properties?.feature_type === "postcode"
      ? feature?.properties?.name
      : null);

  return typeof postcodeName === "string" ? postcodeName : null;
}
