// event actions for location data management

import type { LocationMode } from "./types";
import type { CincinnatiZipCode } from "../../data/cincinnatiZipCodes";

export type LocationAction =
  | { type: "SET_MODE"; mode: LocationMode }
  | { type: "SET_ZIP"; zipCode: CincinnatiZipCode }
  | { type: "SET_ADDRESS"; address: string };
