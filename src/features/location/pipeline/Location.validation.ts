// logic of can we proceed from location step

import type { LocationState } from "../state/Location.types";

export type ValidationError = {
  field: "mode" | "zipCode" | "address" | "proof";
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: ValidationError[];
};

export function validateLocation(state: LocationState): ValidationResult {
  const errors: ValidationError[] = [];

  if (!state.mode) {
    errors.push({
      field: "mode",
      message: "Please choose how to share your location.",
    });
    return { valid: false, errors };
  }

  if (state.mode === "zip") {
    if (state.zip) {
      errors.push({
        field: "zipCode",
        message: "Please select valid Cincinnati-area zip code.",
      });
    }
    if (state.zip.lat === null || state.zip.lng === null) {
      errors.push({
        field: "zipCode",
        message: "ZIP coordinates are missing (centroid lookup failed).",
      });
    }
  }

  if (state.mode === "address") {
    if (!state.address || state.address.query.trim().length === 0) {
      errors.push({
        field: "address",
        message: "Please enter a valid address.",
      });
    }
    if (!state.address.selectedLabel) {
      errors.push({
        field: "address",
        message: "Please select an address from the suggestions.",
      });
    }
    if (state.address.lat === null || state.address.lng === null) {
      errors.push({
        field: "address",
        message: "Address coordinates are missing. Please select a suggestion.",
      });
    }
  }

  if (state.mode === "browser") {
    if (state.browser.lat === null || state.browser.lng === null) {
      errors.push({
        field: "address",
        message: "Please allow location access or choose another option.",
      });
    }
  }

  // Proof-of-residency: you said you'll use this for eligibility.
  if (state.hasProofOfResidency === null) {
    errors.push({
      field: "proof",
      message: "Please indicate whether you have proof of residency.",
    });
  }

  return { valid: errors.length === 0, errors };
}
