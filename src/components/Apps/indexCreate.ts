import Counter from "./react/counter/create/Counter";
import CreateAxiosRealExample from "./react/fetch/axios/create/CreateAxiosRealExample";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const createComponents: ComponentMap = {
  "data fetch axios api": CreateAxiosRealExample,
  counter: Counter,
};
