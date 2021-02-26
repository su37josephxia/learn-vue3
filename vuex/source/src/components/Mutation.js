
export default {
  template: `
    <div>
      {{ $store.state.count }}
    </div>
  `,
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