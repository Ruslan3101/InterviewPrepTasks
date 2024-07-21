import { FixAxiosRealExample } from "./react/fetch/axios/fix/FixAxiosRealExample";
import Counter from "./react/counter/fix/Counter";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const fixComponents: ComponentMap = {
  "data fetch axios api": FixAxiosRealExample,
  counter: Counter,
};
