import type { NormalizedLocation } from "../features/location/pipeline/Location.normalize";
import type { LocationCalc } from "../features/location/pipeline/Location.calculate";

export type QuestionnaireState = {
  location?: NormalizedLocation & { calc: LocationCalc };
};
