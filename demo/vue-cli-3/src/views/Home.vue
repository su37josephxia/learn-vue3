<template>
  <div class="home">
    count ...{{count}}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import { toRefs } from "vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore();
    const { count } = store.state;
    return { count };
  }
};
</script>
