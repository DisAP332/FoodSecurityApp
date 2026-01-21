// indicates state shape for location data

import type { CincinnatiZipCode } from "../../data/cincinnatiZipCodes";

export type LocationMode = "zip" | "address" | "browser";

export type LocationState = {
  mode?: LocationMode;
  zipCode?: CincinnatiZipCode;
  address: string;
  isValid: boolean;
};
