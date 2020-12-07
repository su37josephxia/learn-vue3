<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
function getEventCount(value) {
  return value.length;
}

import { ref, watch, watchEffect } from "vue";
export default {
  setup(props, context) {
    const searchInput = ref("");
    const results = ref(0);

    watchEffect(() => {
      results.value = getEventCount(searchInput.value);
    });

    watch(
      searchInput,
      (newVal, oldVal) => {
        console.log("watch searchInput:", newVal, oldVal);
      },
      {
        immediate: true,
      }
    );

    return { searchInput, results };
  },
};
</script>
