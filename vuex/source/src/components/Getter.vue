<template>
  <div>
    ===getter===
    <h1>{{ $store.getters.doneTodos }}</h1>
    <h1>{{ $store.getters.doneTodosCount }}</h1>
    <h1>{{ doneTodosCount }}</h1>
    <h1>{{ doneCount }}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // 展开运算符
  computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount;
    // },
    ...mapGetters(["doneTodosCount"]),
    ...mapGetters({
      doneCount: "doneTodosCount",
    }),
  },
};
</script>