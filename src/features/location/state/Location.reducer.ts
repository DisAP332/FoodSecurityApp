// dictates rules for state changes related to location data

import type { LocationAction } from "./Location.actions";
import { LocationState } from "./Location.types";

export function locationReducer(
  state: LocationState,
  action: LocationAction,
): LocationState {
  switch (action.type) {
    case "SET_MODE":
      return {
        mode: action.mode,
        zip: state.zip,
        address: state.address,
        browser: state.browser,
        hasProofOfResidency: state.hasProofOfResidency,
      };

    case "SET_ZIP":
      return {
        ...state,
        zip: action.zipCode,
        isValid: true,
      };

    case "SET_ADDRESS_QUERY":
      return {
        ...state,
        address: action.address,
        isValid: action.address.length > 5,
      };

    default:
      return state;
  }
}
