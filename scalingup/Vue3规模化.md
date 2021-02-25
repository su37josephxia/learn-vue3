# Vue3规模化  Scaling up



> 2.0 中文版 https://cn.vuejs.org/v2/guide/routing.html
>
> 3.0 英文版 https://v3.vuejs.org/guide/routing.html
>
> 3.0 中文版 https://v3.cn.vuejs.org/
>
> 3.0 中文版 规模化https://v3.cn.vuejs.org/guide/routing.html#%E5%AE%98%E6%96%B9-router
>
> 路由原理 https://www.cnblogs.com/gaosirs/p/10606266.html



## 路由 - Routing

通过改变 URL，在不重新请求页面的情况下，更新页面视图。

其实 v-if也可以切换视图，但是如果逻辑复杂有几十上百个视图需要切换。就不太可能使用v-if实现。

就有点像一个好的代码不能写几百个if判断一样。你就需要引入策略模式来完成这个逻辑。





### 原理演示

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
  </head>

  <body>
    <div id="app"></div>
    <script>
      const NotFoundComponent = { template: "<p>Page not found</p>" };
      const HomeComponent = { template: "<p>Home page</p>" };
      const AboutComponent = { template: "<p>About page</p>" };

      // 配置路由策略
      const routes = {
        "/": HomeComponent,
        "/about": AboutComponent,
      };

      const SimpleRouter = {
        data: () => ({
          currentRoute: window.location.pathname,
        }),

        computed: {
          CurrentComponent() {
            return routes[this.currentRoute] || NotFoundComponent;
          },
        },
        // 通过H函数渲染组件
        render() {
          return Vue.h(this.CurrentComponent);
        },
      };

      const app = Vue.createApp(SimpleRouter).mount("#app");

      setTimeout(() => {
        app.currentRoute = '/about'
        history.pushState(null, "about", "/about")
      }, 1000);
    </script>
  </body>
</html>

```



### 扩展点

- H5 history
- Hash模式
- V-Link实现







## 状态管理 - StateManagement

### 原始状态

```js
// 创建响应式数据
const sourceOfTruth = Vue.reactive({
  message: 'Hello'
})

// 创建两个实例
const appA = Vue.createApp({
  data() {
    return sourceOfTruth
  }
}).mount('#app-a')

const appB = Vue.createApp({
  data() {
    return sourceOfTruth
  }
}).mount('#app-b')


```



```
<div id="app-a">App A: {{ message }}</div>

<div id="app-b">App B: {{ message }}</div>

```



虽然视图可以根据数据变化进行更新

缺点

- 调试噩梦
- 数据变化不会留下记录



### 状态管理

- 集中式管理
- 更容易理解数据的变化 
- 他们是如何触发的
- 出现错误时可以根据log判断



```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
  </head>

  <body>
    <!-- <div id="app-a">App A: {{ message }}</div>
    <div id="app-b">App B: {{ message }}</div> -->

    <div id="app-a">{{sharedState.message}}</div>
    <div id="app-b">{{sharedState.message}}</div>

    <script>
      const sourceOfTruth = Vue.reactive({
        message: "Hello",
      });

      const store = {
        debug: true,

        state: Vue.reactive({
          message: "Hello!",
        }),

        setMessageAction(newValue) {
          if (this.debug) {
            console.log("setMessageAction triggered with", newValue);
          }

          this.state.message = newValue;
        },

        clearMessageAction() {
          if (this.debug) {
            console.log("clearMessageAction triggered");
          }

          this.state.message = "";
        },
      };

      const appA = Vue.createApp({
        data() {
          // return sourceOfTruth;
          return {
            sharedState: store.state,
          };
        },
      }).mount("#app-a");

      const appB = Vue.createApp({
        data() {
          // return sourceOfTruth;
          return {
            sharedState: store.state,
          };
        },

        mounted() {
          setTimeout(() => {
            // sourceOfTruth.message = "Goodbye";
            store.setMessageAction("Goodbye!");
          }, 1000);
        },
      }).mount("#app-b");
    </script>
  </body>
</html>

```



### 进一步扩展

- 组件不允许直接变更store中的state
- 需要通过action分发dispatch改变
- 好处可以记录所有的store
- 可以实现记录变更，保存状态快照、历史回滚、时光旅行





## 服务端渲染 - Server-Side Rendering

SPA的弱点

- 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
- 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。

