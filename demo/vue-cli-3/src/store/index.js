import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count:1
  },
  mutations: {
    add(state){
      state.count ++ 
    }
  },
  actions: {
  },
  modules: {
  }
});
