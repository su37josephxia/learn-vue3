<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>=======Getter======</h1>
    <Getter style="display:none"/>
    <h1>=======Mutation======</h1>
    <Mutation />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Getter from "./components/Getter.vue";
import Mutation from "./components/Mutation.vue";


export default {
  name: "App",
  components: {
    HelloWorld,
    Getter,
    Mutation
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
