// logic of can we proceed from location step

import type { LocationState } from "../state/Location.types";

export type ValidationError = {
  field: "mode" | "zipCode" | "address" | "proof";
  message: string;
};

export type ValidationResult = {
  valad: boolean;
  errors: ValidationError[];
};

export function validateLocation(state: LocationState): ValidationResult {
  const errors: ValidationError[] = [];

  if (!state.mode) {
    errors.push({
      field: "mode",
      message: "Please choose how to share your location.",
    });
    return { valad: false, errors };
  }

  if (state.mode === "zip") {
    if (!state.zipCode) {
      errors.push({
        field: "zipCode",
        message: "Please select valid Cincinnati-area zip code.",
      });
    }
  }

  if (state.mode === "address") {
    if (!state.address || state.address.trim().length === 0) {
      errors.push({
        field: "address",
        message: "Please enter a valid address.",
      });
    }
  }

  return { valad: errors.length === 0, errors };
}
