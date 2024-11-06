import AxiosAPI from "../../features/react/dataFetchAxiosAPI/create/AxiosAPI";

import Timer from "../../features/react/timer/create/Timer";
import TodoList from "../../features/react/todoList/create/TodoList";
import DataFetchJSON from "../../features/react/dataFetchJSON/create/FetchJSON";
import RandomQuoteGeneration from "../../features/react/randomQuoteGeneration/create/RandomQuoteGeneration";
import Counter from "../../features/react/counter/create/Counter";
import FileUploader from "../../features/react/fileUploader/create/FileUploader";
import FetchAPI from "../../features/react/dataFetchAPI/create/dataFetchAPI";

type ComponentMap = Record<string, React.ComponentType<any>>;

export const taskCreateComponents: ComponentMap = {
  "fetch api": FetchAPI,
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "data fetch json": DataFetchJSON,
  "random quote generation": RandomQuoteGeneration,
  "file uploader": FileUploader,
};
