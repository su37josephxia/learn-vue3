import { onBeforeMount,onMounted } from "vue";
export default {
  setup() {
    onBeforeMount(() => {
        console.log('Before Mount!')
    }) 
    onMounted(() => {
        console.log('Before Mount!')
    }) 
  },
};
