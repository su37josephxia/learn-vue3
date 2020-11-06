<template>
  <div class="hello" style="border: 1px solid">
    <h1 ref="root">{{ msg }}</h1>
    {{ state.count }} double is {{ double }}
    <button @click="add">+</button>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
export default {
  // ....
  setup() {
    const state = reactive({
      count: 0,
    });
    const add = () => {
      state.count++;
    };

    const double = computed(() => state.count * 2);

    return { state, add, double };
  },
};
</script>