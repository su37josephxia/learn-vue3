<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <div>{{ $store.state.count }}</div>
</template>
<script>
import { useStore } from "vuex";
import { key } from "./store";

export default {
  setup() {
    const store = useStore(key);
    console.log(store.state.count); // typed as number
  },
};
</script>
