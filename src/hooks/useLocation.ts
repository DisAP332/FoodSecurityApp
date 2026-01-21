import { useReducer } from "react";
import { locationReducer } from "../state/location/locationReducer";
import type { LocationState } from "../state/location/types";

const initialState: LocationState = {
  mode: undefined,
  zipCode: undefined,
  address: "",
  isValid: false,
};

export function useLocation() {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  return {
    state,
    setMode: (mode) => dispatch({ type: "SET_MODE", mode }),
    setZipCode: (zipCode) => dispatch({ type: "SET_ZIP", zipCode }),
    setAddress: (address) => dispatch({ type: "SET_ADDRESS", address }),
  };
}
