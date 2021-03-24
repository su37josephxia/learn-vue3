import { InjectionKey } from "vue";
import { createStore, Store ,useStore} from "vuex";

// define your typings for the store state
export interface State {
  count: number;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
});

// 简写方法
export function useStoreWithKey () {
  return useStore(key)
}