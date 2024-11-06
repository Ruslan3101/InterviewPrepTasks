import TodoList from "../../features/react/todoList/fix/TodoList";
import Timer from "../../features/react/timer/fix/Timer";
import DynamicBackground from "../../features/react/dynamicBackground/fix/DynamicBackground";
import { AxiosAPI } from "../../features/react/dataFetchAxiosAPI/fix/AxiosAPI";
import DataFetchJSON from "../../features/react/dataFetchJSON/fix/FetchJSON";
import RandomQuoteGeneration from "../../features/react/randomQuoteGeneration/fix/RandomQuoteGeneration";
import Counter from "../../features/react/counter/fix/Counter";
import FileUploader from "../../features/react/fileUploader/fix/FileUploader";
import FetchAPI from "../../features/react/dataFetchAPI/fix/dataFetchAPI";

type ComponentMap = Record<string, React.ComponentType<any>>;

export const taskFixComponents: ComponentMap = {
  "fetch api": FetchAPI,
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "dynamic background": DynamicBackground,
  "data fetch json": DataFetchJSON,
  "random quote generation": RandomQuoteGeneration,
  "file uploader": FileUploader,
};
