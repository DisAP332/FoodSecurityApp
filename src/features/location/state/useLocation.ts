import { useReducer } from "react";
import { LocationMode, LocationState } from "./Location.types";
import { locationReducer } from "./Location.reducer";
import { CincinnatiZipCode } from "../data/ZipCodes.data";

const initialState: LocationState = {
  mode: undefined,
  zip: {
    zipCode: undefined,
    lat: null,
    lng: null,
  },
  address: {
    query: "",
    selectedLabel: undefined,
    lat: null,
    lng: null,
    zipCode: null,
  },
  browser: {
    lat: null,
    lng: null,
    zipCode: null,
  },
  hasProofOfResidency: null,
};

export function useLocation() {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  return {
    state,
    setMode: (mode: LocationMode) => dispatch({ type: "SET_MODE", mode }),
    setZipCode: (zipCode: CincinnatiZipCode) =>
      dispatch({ type: "SET_ZIP", zipCode }),
    setAddressQuery: (query: string) =>
      dispatch({ type: "SET_ADDRESS_QUERY", query }),
    setAddressSelected: (payload: {
      label: string;
      lat: number;
      lng: number;
      zipCode: CincinnatiZipCode | null;
    }) =>
      dispatch({
        type: "SET_ADDRESS_SELECTED",
        label: payload.label,
        lat: payload.lat,
        lng: payload.lng,
        zipCode: payload.zipCode,
      }),
    setProofOfResidency: (value: boolean) =>
      dispatch({ type: "SET_PROOF_OF_RESIDENCY", value }),
  };
}
