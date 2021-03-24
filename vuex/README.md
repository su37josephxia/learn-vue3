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



下载Vuex

```

yarn --ignorescript
```





## Advanced

### 01 Application Structure

### 02 Composition API

### 03 Plugins

### 04 Strict Mode - 严格模式

### 05 Form Handing - 表单处理

### 06 Testing 测试
> mocha是一个功能丰富的javascript测试框架，运行在node.js和浏览器中，使异步测试变得简单有趣。Mocha测试连续运行，允许灵活和准确的报告，同时将未捕获的异常映射到正确的测试用例。在Github上托管。


### 07 Hot Reloading 热重载

### 08 TypeScript Support TS支持

## Migration Guide 迁移指南



