import AnswerAxiosRealExample from "./react/fetch/axios/answer/AnswerAxiosRealExample";
import Counter from "./react/counter/answer/Counter";
import TodoList from "./react/todoList/answer/TodoList";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const answerComponents: ComponentMap = {
  "data fetch axios api": AnswerAxiosRealExample,
  counter: Counter,
  todolist: TodoList,
};
