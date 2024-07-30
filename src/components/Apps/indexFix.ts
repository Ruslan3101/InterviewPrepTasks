import Counter from "./react/counter/fix/Counter";
import TodoList from "./react/todoList/fix/TodoList";
import Timer from "./react/timer/fix/Timer";
import DynamicBackground from "./react/dynamicBackground/fix/DynamicBackground";
import { AxiosAPI } from "./react/dataFetchAxiosAPI/fix/AxiosAPI";
import DataFetchJSON from "./react/dataFetchJSON/fix/FetchJSON";
import RandomQuoteGeneration from "./react/randomQuoteGeneration/fix/RandomQuoteGeneration";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const fixComponents: ComponentMap = {
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "dynamic background": DynamicBackground,
  "data fetch json": DataFetchJSON,
  "random quote generation": RandomQuoteGeneration,


};
