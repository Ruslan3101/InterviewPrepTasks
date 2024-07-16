import AnswerAxiosRealExample from "./react/fetch/axios/answer/AnswerAxiosRealExample";
import Counter from "./react/counter/answer/Counter";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const answerComponents: ComponentMap = {
  axios: AnswerAxiosRealExample,
  counter: Counter,
};
