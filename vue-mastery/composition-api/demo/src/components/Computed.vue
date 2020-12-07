<template>
  <div>
    <div>Capacity： {{ capacity }}</div>
    <p>Spases Left: {{ sapcesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  setup(props, context) {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);
    function increaseCapacity() {
      capacity.value++;
    }
    const sapcesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });
    return { capacity, increaseCapacity, attending, sapcesLeft };
  },
};
</script>
