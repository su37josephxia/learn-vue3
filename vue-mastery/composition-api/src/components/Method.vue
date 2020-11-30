<template>
  <div>
    <div>Capacity： {{ capacity }}</div>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup(props, context) {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);
    function increaseCapacity() {
      capacity.value++;
    }
    return { capacity, increaseCapacity };
  },
};
</script>
