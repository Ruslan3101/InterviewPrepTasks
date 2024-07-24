import Counter from "./react/counter/create/Counter";
import CreateAxiosRealExample from "./js/fetch/axios/create/CreateAxiosRealExample";
import Timer from "./react/timer/create/Timer";
import TodoList from "./react/todoList/create/TodoList";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const createComponents: ComponentMap = {
  "data fetch axios api": CreateAxiosRealExample,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
};
