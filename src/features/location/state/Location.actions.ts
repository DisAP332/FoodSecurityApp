// event actions for location data management

import type { CincinnatiZipCode } from "../data/ZipCodes.data";
import { LocationMode } from "./Location.types";

export type LocationAction =
  | { type: "SET_MODE"; mode: LocationMode }
  | { type: "SET_ZIP"; zipCode: CincinnatiZipCode }
  | { type: "SET_ADDRESS_QUERY"; query: string }
  | {
      type: "SET_ADDRESS_SELECTED";
      label: string;
      lat: number;
      lng: number;
      zipCode: CincinnatiZipCode | null;
    }
  | { type: "SET_PROOF_OF_RESIDENCY"; value: boolean };
