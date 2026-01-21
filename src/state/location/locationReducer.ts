// dictates rules for state changes related to location data

import type { LocationState } from "./types";
import type { LocationAction } from "./actions";

export function locationReducer(
  state: LocationState,
  action: LocationAction,
): LocationState {
  switch (action.type) {
    case "SET_MODE":
      return {
        mode: action.mode,
        zipCode: undefined,
        address: "",
        isValid: false,
      };

    case "SET_ZIP":
      return {
        ...state,
        zipCode: action.zipCode,
        isValid: true,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
        isValid: action.address.length > 5,
      };

    default:
      return state;
  }
}
