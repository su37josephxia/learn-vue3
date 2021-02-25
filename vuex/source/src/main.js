import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from "./App.vue";

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')

console.log(store.state.count) // -> 1

const app = createApp(App)
app.use(store)
app.mount('#app')
