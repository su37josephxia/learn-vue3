<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>count:{{state.count}}</div>
    <div>double:{{double}}</div>
    <button @click="add">+</button>
    <button @click="goHome">goHome</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
        state: this.$store.state
    };
  },
  computed: {
    double() {
      return this.$store.state.count * 2;
    },
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    goHome() {
      this.$router.push('Home')
    }
  }
};
</script>