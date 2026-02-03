import { useReducer } from "react";
import {
  questionnaireReducer,
  initialQuestionnaireState,
  type QuestionnaireAction,
} from "./questionnaire.reducer";

export function useQuestionnaire() {
  const [state, dispatch] = useReducer(
    questionnaireReducer,
    initialQuestionnaireState,
  );
  return { state, dispatch };
}
