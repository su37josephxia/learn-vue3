export default {
  template: `
  <button @click="increment">Add</button>
  <h1> {{ $store.state.count }}</h1>
  `,
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
