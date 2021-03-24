import { createStore } from "vuex";

const state = {
  count: 0,
  products: [
    { id: 1, title: "Apple", category: "fruit" },
    { id: 2, title: "Orange", category: "fruit" },
    { id: 3, title: "Carrot", category: "vegetable" },
  ],
};

export const mutations = {
  increment: (state) => state.count++,
};


export default createStore({
  state,
  mutations,
});
