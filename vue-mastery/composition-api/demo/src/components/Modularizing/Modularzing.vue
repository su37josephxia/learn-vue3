<template>
  <div>
    <div>Capacity： {{ capacity }}</div>
    <p>Spases Left: {{ sapcesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import useEventSapce from "../composables/use-event-space";
export default {
  setup(props, context) {
    const {
      capacity,
      attending,
      increaseCapacity,
      sapcesLeft,
    } = useEventSapce();
    return { capacity, increaseCapacity, attending, sapcesLeft };
  },
};
</script>
