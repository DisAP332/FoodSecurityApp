import type { CincinnatiZipCode } from "../location/data/ZipCodes.data";

export type MasterLocation = {
  source: "zip" | "address" | "browser";
  zipCode: CincinnatiZipCode;
  lat: number;
  lng: number;
  hasProofOfResidency: boolean | null;
};

export type QuestionnaireState = {
  location: MasterLocation | null;
};
