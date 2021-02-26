# Vuex

> Vuex 4.0 英文 https://next.vuex.vuejs.org/
>
> Vuex 3.0 中文 https://vuex.vuejs.org/zh/guide/


## 困难解决
### CLI工具增加模板编译
```js
// main.js
import { createApp } from 'vue/dist/vue.esm-bundler'
```

### 忽略语法检查
vue.config.js
```
module.exports = {
  lintOnSave: false,
};

```

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
<template>
  <div>
    <button @click="increment">Add</button>
    <h1> {{ $store.state.count }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
```

## 核心概念 - Core Concepts

### State

