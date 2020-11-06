import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    // 路由配置不变
    // {
    //   path: "/",
    //   redirect: "aaa",
    // },

    {
      path: "/",
      name: "aaa",
      component: import('./views/AAA.vue'),
    },
    {
      path: "/BBB",
      name: "aaa",
      component: () => import("./views/BBB.vue"),
    },
  ],
});

createApp(App)
  .use(router)
  .mount("#app");
