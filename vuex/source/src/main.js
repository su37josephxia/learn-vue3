import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from "./App.vue";

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementN (state,n ) {
      state.count += n
    },
    incrementO (state,payload) {
      state.count += payload.amount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})

store.commit('increment')

console.log(store.state.count) // -> 1

const app = createApp(App)
app.store = store
app.use(store)
app.mount('#app')
