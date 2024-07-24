import { FixAxiosRealExample } from "./js/fetch/axios/fix/FixAxiosRealExample";
import Counter from "./react/counter/fix/Counter";
import TodoList from "./react/todoList/fix/TodoList";
import Timer from "./react/timer/fix/Timer";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const fixComponents: ComponentMap = {
  "data fetch axios api": FixAxiosRealExample,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
};
