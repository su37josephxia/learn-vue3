import { ref, computed } from "vue";
export default function useEventSpace() {
  const capacity = ref(3);
  const attending = ref(["Tim", "Bob", "Joe"]);
  function increaseCapacity() {
    capacity.value++;
  }
  const sapcesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });

  return { capacity, attending, increaseCapacity, sapcesLeft };
}
