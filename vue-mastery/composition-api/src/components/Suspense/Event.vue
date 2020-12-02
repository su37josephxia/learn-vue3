<template>
  <div>Event Result is {{ count }}</div>
</template>

<script>
export default {
  async setup() {
    const count = ref("");
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