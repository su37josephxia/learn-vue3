<template>
  <div>
    {{ $store.state.count }}
  </div>
</template>


<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.commit("increment");
    }, 1000);
    setTimeout(() => {
      this.$store.commit("incrementN", 100);
    }, 2000);
    setTimeout(() => {
      this.$store.commit("incrementO", {
        amount: 300,
      });
    }, 3000);
    setTimeout(() => {
      this.$store.commit({
        type: "incrementO",
        amount: 200,
      });
    }, 4000);
  },
};
</script>