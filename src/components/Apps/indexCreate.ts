import AxiosAPI from "./react/dataFetchAxiosAPI/create/AxiosAPI";
import Counter from "./react/counter/create/Counter";
import Timer from "./react/timer/create/Timer";
import TodoList from "./react/todoList/create/TodoList";
import DataFetchJSON from "./react/dataFetchJSON/create/FetchJSON";
import RandomQuoteGeneration from "./react/randomQuoteGeneration/create/RandomQuoteGeneration";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const createComponents: ComponentMap = {
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "data fetch json": DataFetchJSON,
  "random quote generation": RandomQuoteGeneration,


};
