import AnswerAxiosRealExample from "./js/fetch/axios/answer/AnswerAxiosRealExample";
import Counter from "./react/counter/answer/Counter";
import TodoList from "./react/todoList/answer/TodoList";
import Timer from "./react/timer/answer/Timer";
import Promise from "./js/Promise/Promise";
import DynamicBackground from "./react/dynamicBackground/answer/DynamicBackground";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const answerComponents: ComponentMap = {
  // React
  "data fetch axios api": AnswerAxiosRealExample,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "dynamic background": DynamicBackground,

  //JS
  promise: Promise,
};
