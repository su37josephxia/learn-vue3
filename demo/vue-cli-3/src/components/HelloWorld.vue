<template>
  <div class="hello" style="border:1px solid">
    <h1 ref="root">{{ msg }}</h1>
    {{state.count}} double is {{double}}
    <button @click="add">+</button>
  </div>
</template>

<script>
import {reactive, onMounted, ref,computed,watch} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const state = reactive({
      count:0
    })
    const double = computed (() => state.count * 2 )
    const add = () => {
      state.count++
    }

    watch(
      () => state.count,
      value => {
        console.log('state change :',value)
      }
    )

    // ref 创建一个响应式的数据对象
    const root = ref(null)
    onMounted(() => {
      // 关联节点
      console.log('dom',root)
      const dom = root.value
      dom.style.color = 'red'
    })

    return {state,double,add,root}
  }
}
</script>

