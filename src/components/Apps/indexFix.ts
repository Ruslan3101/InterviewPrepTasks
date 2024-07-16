import { FixAxiosRealExample } from "./react/fetch/axios/fix/FixAxiosRealExample";
import Counter from "./react/counter/fix/Counter";

type ComponentMap = Record<string, React.ComponentType<any>>;
export const fixComponents: ComponentMap = {
  axios: FixAxiosRealExample,
  counter: Counter,
};
