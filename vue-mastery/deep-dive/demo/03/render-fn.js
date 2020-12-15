import { h } from "vue";

export default {
  render() {
    // return h("div", {
    //     id:'hello'
    // }, [
    //     h('span','world')
    // ]);

    // v-if
    //   let nodeToReturn
    //   if(this.ok) {
    //     // nodeToReturn = ...
    //   }else if() {

    //   }

    //   return this.ok
    //     ? h(
    //         "div",
    //         {
    //           id: "hello",
    //         },
    //         [h("span", "world")]
    //       )
    //     : this.otherCondition
    //       ? h("p", "other branch")
    //       : h("span")

    // v-for="item in list"
    // return this.list.map((item) => {
    //   return h(
    //     "div",
    //     {
    //       key: item.id,
    //     },
    //     item.text
    //   );
    // });

    // slots
    // default是渲染函数
    const slot = this.$slots.default ? this.$slots.default({}) : [];

    slot.map((vnode) => {
      return h("div", [vnode]);
    });

    return h(
      "div",
      { class: "stack" },
      slot.map((child) => {
        return h("div", { class: `mt-${this.$props.size}` }, [child]);
      })
    );
  },
};
// <div id="hello"><span>world</span></div>

{
  /* <Stack size="4">
  <div>hello</div>
  <Stack size="4">
    <div>hello</div>
    <div>hello</div>
  </Stack>
</Stack>;

<div class="stack">
  <div class="mt-4">
    <div>hello</div>
  </div>
  <div class="mt-4">
    <div class="stack">
      <div class="mt-4">
        <div>hello</div>
      </div>
    </div>
  </div>
</div>; */
}
