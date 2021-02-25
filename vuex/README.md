# Vuex

> Vuex 4.0 英文 https://next.vuex.vuejs.org/
>
> Vuex 3.0 中文 https://vuex.vuejs.org/zh/guide/





## Start

```
npm i vite -s
```



```
vue create 01-start
# 选择Vue3.0

# 安装vuex
yarn add vuex@4.0.0

```



Main.js

```js
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

```

HelloWorld.vue

```
<button @click="increment">Add</button>
<h1> {{ $store.state.count }}</h1>


methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
},
```

