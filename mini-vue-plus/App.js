// const { effect, reactive } = require("@vue/reactivity");
// const { effectWatch, reactive } = require("./core/reactivity");
import { effectWatch, reactive } from "./core/reactivity/index.js";
import { h } from "./core/h.js";

// v1
// let a = 10;
// let b = a + 10;
// console.log(b)

// a = 20;
// b = a + 10;
// console.log(b)

// v2

// let a = 10;
// let b;
// update();
// function update() {
//   b = a + 10;
//   console.log(b);
// }

// a = 20;
// update();

// v3
// a 发生变更了 ，我想让 b 自动更新

// 声明一个响应式对象
let a = reactive({
  value: 1,
});
let b;
effectWatch(() => {
  // 函数
  // 1. 会执行以下
  b = a.value + 10;
  console.log(b);
});

// a 响应式对象的值发生改变之后
a.value = 30;

// vue3

export default {
  // template -> render
  render(context) {
    // 构建 view = b
    // view -> 每次我都需要重新的创建
    // 要计算出最小的更新点  -> vdom
    // js ——> diff
    // reset
    // tag
    // props
    // children
    // const div = document.createElement("div");
    // div.innerText = context.state.count;
    // return div;
    return h(
      "div",
      {
        id: "app - " + context.state.count,
        class: "showTim",
      },
      // String(context.state.count)
      [h("p", null, String(context.state.count)), h("p", null, "hahha")]
    );
  },
  setup() {
    // a = 响应式数据
    const state = reactive({
      count: 0,
    });
    window.state = state;
    return { state };
  },
};
