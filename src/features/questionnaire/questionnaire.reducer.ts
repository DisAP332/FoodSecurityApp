import type { QuestionnaireState, MasterLocation } from "./questionnaire.types";

export type QuestionnaireAction =
  | { type: "SET_LOCATION"; location: MasterLocation }
  | { type: "RESET" };

export const initialQuestionnaireState: QuestionnaireState = {
  location: null,
};

export function questionnaireReducer(
  state: QuestionnaireState,
  action: QuestionnaireAction,
): QuestionnaireState {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.location };
    case "RESET":
      return initialQuestionnaireState;
    default:
      return state;
  }
}
