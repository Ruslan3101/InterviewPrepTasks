import Counter from "./react/counter/answer/Counter";
import TodoList from "./react/todoList/answer/TodoList";
import Timer from "./react/timer/answer/Timer";
import Promise from "./js/Promise/Promise";
import DynamicBackground from "./react/dynamicBackground/answer/DynamicBackground";
import AxiosAPI from "./react/dataFetchAxiosAPI/answer/AxiosAPI";
import DataFetchJSON from "./react/dataFetchJSON/answer/FetchJSON";
import RandomQuoteGeneration from "./react/randomQuoteGeneration/answer/RandomQuoteGeneration";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const answerComponents: ComponentMap = {
  // React
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "dynamic background": DynamicBackground,
  "data fetch json": DataFetchJSON,
  "random quote generation": RandomQuoteGeneration,

  //JS
  promise: Promise,
};
