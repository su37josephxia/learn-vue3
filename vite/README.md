# Vite工具

在4月21日晚，Vue作者尤雨溪在哔哩哔哩直播分享了Vue.js 3.0 Beta最新进展。 里面尤大大所提到他最近在做的这个小工具 [vite](https://github.com/vuejs/vite) ,一个实验性的no build的vue开发服务器。(这个小工具可以支持热更新,且不用预编译)



ServerWorker

https://juejin.im/post/5b06a7b3f265da0dd8567513#heading-7



## 安装

```bash
mkdir vue-vite
npm init -y
yarn add vue@next @vue/compiler-sfc

npm i vite -g 全局安装vite


```



helloworld

```html
// Helloworld.vue
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
export default {
  data: () => ({ count: 0 })
}
</script>

<style scoped>
	button { color: red }
</style>
```



```js
// main.js
import { createApp } from 'vue'
import Comp from './Comp.vue'

createApp(Comp).mount('#app')
```



```js
// index.html
<div id="app"></div>
<script type="module" src="/main.js"></script>
```





