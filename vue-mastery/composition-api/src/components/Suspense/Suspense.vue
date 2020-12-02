<template>
  <Suspense>
    <template #default>
      <Event />
    </template>
    <template #fallback> Loading.... </template>
  </Suspense>
</template>

<script>
import Event from "./Event.vue";
export default {
  components: {
    Event,
  },
};
</script>
