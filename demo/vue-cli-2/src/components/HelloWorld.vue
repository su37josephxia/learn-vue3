<template>
  <div class="hello">
    <h1 ref="dom">{{ msg }}</h1>
    <button @click="add">+</button>
    <div>count : {{state.count}}</div>
    <div>double : {{double}}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      state: {
        count: 0
      }
    };
  },
  methods: {
    add() {
      this.state.count++;
    }
  },
  // 计算属性
  computed: {
    double() {
      return this.state.count * 2;
    }
  },
  // 监听属性
  watch: {
    count: value => {
      console.log("count is changed:", value);
    }
  },
  mounted() {
    this.$refs.dom.style.color = "red";
  }
};
</script>

