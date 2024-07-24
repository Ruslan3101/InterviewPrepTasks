import AnswerAxiosRealExample from "./js/fetch/axios/answer/AnswerAxiosRealExample";
import Counter from "./react/counter/answer/Counter";
import TodoList from "./react/todoList/answer/TodoList";
import Timer from "./react/timer/answer/Timer";
import Promise from "./js/Promise/Promise";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const answerComponents: ComponentMap = {
  // React
  "data fetch axios api": AnswerAxiosRealExample,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,

  //JS
  promise: Promise,
};
