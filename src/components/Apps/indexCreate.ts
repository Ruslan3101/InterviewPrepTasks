import AxiosAPI from "./react/axios/create/AxiosAPI";
import Counter from "./react/counter/create/Counter";
import Timer from "./react/timer/create/Timer";
import TodoList from "./react/todoList/create/TodoList";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const createComponents: ComponentMap = {
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
};
