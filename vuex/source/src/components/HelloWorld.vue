<template>
  <div>
    <button @click="increment">Add</button>
    
    <h1> {{ $store.state.count }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
