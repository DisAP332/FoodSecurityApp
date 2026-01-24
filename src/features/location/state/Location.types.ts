// indicates state shape for location data

import type { CincinnatiZipCode } from "../data/ZipCodes.data";

export type LocationMode = "zip" | "address" | "browser";

export type ZipState = {
  zipCode?: CincinnatiZipCode;
  lat: number | null;
  lng: number | null;
};

export type AddressState = {
  query: string; // what user is typing
  selectedLabel: string | null; // what they chose from suggestions
  lat: number | null;
  lng: number | null;
  zipCode: string | null;
};

export type BrowserState = {
  lat: number | null;
  lng: number | null;
  zipCode: string | null;
};

export type LocationState = {
  mode?: LocationMode;
  zip: ZipState;
  address: AddressState;
  browser: BrowserState;
  hasProofOfResidency: boolean | null;
};
