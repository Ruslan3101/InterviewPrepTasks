import TodoList from "../../features/react/todoList/answer/TodoList";
import Timer from "../../features/react/timer/answer/Timer";
import Promise from "../../features/js/Promise/indexPromise";
import DynamicBackground from "../../features/react/dynamicBackground/answer/DynamicBackground";
import AxiosAPI from "../../features/react/dataFetchAxiosAPI/answer/AxiosAPI";
import DataFetchJSON from "../../features/react/dataFetchJSON/answer/FetchJSON";
import RandomQuoteGeneration from "../../features/react/randomQuoteGeneration/answer/RandomQuoteGeneration";
import Counter from "../../features/react/counter/answer/Counter";
import FileUploader from "../../features/react/fileUploader/answer/FileUploader";
import FetchAPI from "../../features/react/dataFetchAPI/answer/dataFetchAPI";


type ComponentMap = Record<string, React.ComponentType<any>>;

export const taskAnswerComponents: ComponentMap = {
  // React
  "fetch api": FetchAPI,
  "data fetch axios api": AxiosAPI,
  counter: Counter,
  todolist: TodoList,
  timer: Timer,
  "dynamic background": DynamicBackground,
  "data fetch json": DataFetchJSON,
  "random quote generation": RandomQuoteGeneration,
  "file uploader": FileUploader,


  //JS
  promise: Promise,
};
