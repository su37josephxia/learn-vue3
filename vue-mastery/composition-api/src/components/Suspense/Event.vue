<template>
  <div>Event Result is {{ count }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    const count = ref(null);
    function getEventCount() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(3), 1000);
      });
    }

    count.value = await getEventCount();
    return { count };
  },
};
</script>