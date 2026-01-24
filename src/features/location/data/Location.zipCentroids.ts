import usZips from "us-zips";
import { CINCINNATI_ZIP_CODES, CincinnatiZipCode } from "./ZipCodes.data";

type usZipRecord = {
  latitude: number;
  longitude: number;
};

// here a Record is used to type a objects key value pairs.
// we are saying that the key will equal Cincinnati Zip Codes list
// and that the value will be a object w two elements that are numbers
export const CINCINNATI_ZIP_CENTROIDS: Record<
  CincinnatiZipCode,
  { lat: number; lng: number }
  // here we use fromEntries which converts the array made within using map, which come out
  // as a object which is how we
> = Object.fromEntries(
  CINCINNATI_ZIP_CODES.map((zip) => {
    const rec = (usZips as Record<string, usZipRecord>)[zip];
    if (!rec) {
      throw new Error(`Missing centroid for ZIP ${zip}`);
    }
    return [zip, { lat: rec.latitude, lng: rec.longitude }] as const;
  }),
) as Record<CincinnatiZipCode, { lat: number; lng: number }>;

console.log(CINCINNATI_ZIP_CENTROIDS);
