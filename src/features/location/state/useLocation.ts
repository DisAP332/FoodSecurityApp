import { useReducer } from "react";
import { LocationState } from "./Location.types";
import { locationReducer } from "./Location.reducer";

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
