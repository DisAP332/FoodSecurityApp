// dictates rules for state changes related to location data

import { CINCINNATI_ZIP_CENTROIDS } from "../data/Location.zipCentroids";
import type { LocationAction } from "./Location.actions";
import type { LocationState } from "./Location.types";

export function locationReducer(
  state: LocationState,
  action: LocationAction,
): LocationState {
  switch (action.type) {
    case "SET_MODE": {
      const nextMode = action.mode;

      return {
        ...state,
        mode: nextMode,

        // reset other modes' data when switching
        zip: { zipCode: undefined, lat: null, lng: null },
        address: {
          query: "",
          selectedLabel: null,
          lat: null,
          lng: null,
          zipCode: null,
        },
        browser: { lat: null, lng: null, zipCode: null },
      };
    }
    case "SET_ZIP": {
      const { lat, lng } = CINCINNATI_ZIP_CENTROIDS[action.zipCode];
      return {
        ...state,
        zip: { zipCode: action.zipCode, lat, lng },
      };
    }
    case "SET_ADDRESS_QUERY": {
      return {
        ...state,
        address: {
          ...state.address,
          query: action.query,
          selectedLabel: null,
          lat: null,
          lng: null,
          zipCode: null,
        },
      };
    }

    case "SET_ADDRESS_SELECTED": {
      return {
        ...state,
        address: {
          ...state.address,
          query: action.label, // optional: replace input with selected label
          selectedLabel: action.label,
          lat: action.lat,
          lng: action.lng,
          zipCode: action.zipCode, // will be null until reverse-geocoded / converted
        },
      };
    }

    case "SET_PROOF_OF_RESIDENCY": {
      return {
        ...state,
        hasProofOfResidency: action.value,
      };
    }

    default:
      return state;
  }
}
