type MapboxForwardFeature = {
  geometry: { coordinates: [number, number] }; // [lng, lat]
};

type MapboxForwardResponse = {
  features?: MapboxForwardFeature[];
};

export async function forwardGeocodeAddress(
  address: string,
  opts: {
    accessToken: string;
    bbox?: string; // "minLon,minLat,maxLon,maxLat"
    permanent?: boolean;
  },
): Promise<{ lat: number; lng: number } | null> {
  const url = new URL("https://api.mapbox.com/search/geocode/v6/forward");
  url.searchParams.set("q", address);
  url.searchParams.set("access_token", opts.accessToken);
  url.searchParams.set("country", "US");
  url.searchParams.set("types", "address");
  url.searchParams.set("limit", "1");

  // Bias to Cincinnati area (keeps results sane)
  if (opts.bbox) url.searchParams.set("bbox", opts.bbox);

  // If you plan to store/cache coordinates, use permanent=true (requires billing)
  if (typeof opts.permanent === "boolean") {
    url.searchParams.set("permanent", String(opts.permanent));
  }

  const res = await fetch(url.toString());
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Mapbox forward geocode failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as MapboxForwardResponse;
  const first = data.features?.[0];
  if (!first) return null;

  const [lng, lat] = first.geometry.coordinates;
  return { lat, lng };
}
