<template>
  <div>Capacity： {{ capacity }}</div>
</template>

<script>
import { ref,watch } from "vue";
export default {
  // Vue2.0
  // data() {
  //   return {
  //     capacity: 3,
  //   };
  // },
  props: {
    name: String,
  },
  setup(props, context) {
    // 属性监听
    watch(() => {
      console.log(props.name);
    });
    // 上下文对象
    const { attrs, slots, parent, root, emit } = context;
    console.log("context", context);

    const capacity = ref(3);
    return { capacity };
  },
};
</script>
