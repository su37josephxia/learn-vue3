import { mapState } from "vuex";

export default {
  template: `
    <div>{{ count }}</div>
    <div>{{ countPlusLocalState }}</div>
    <div>{{ countAlias }}</div>
    <div>{{ localComputed }}</div> 
  `,
  //   computed: {
  //     count() {
  //       console.log("computed", this.$store.state.count);
  //       return this.$store.state.count;
  //     },
  //   },

  data() {
    return {
      localCount: 100,
    };
  },
  // MapState
  // computed: mapState({
  //   // arrow functions can make the code very succinct!
  //   count: (state) => state.count,

  //   // passing the string value 'count' is same as `state => state.count`
  //   countAlias: "count",

  //   // to access local state with `this`, a normal function must be used
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   },
  // }),

  // 简写
  //   computed: mapState([
  //     // map this.count to store.state.count
  //     "count",
  //   ]),

  // 展开运算符
  computed: {
    localComputed() {
      return 100;
    },
    ...mapState(["count"]),
  },

  mounted() {
    console.log("monted...");
  },
};
