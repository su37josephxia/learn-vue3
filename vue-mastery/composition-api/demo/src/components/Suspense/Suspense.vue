<template>
  <div>
    <div v-if="error">Uh oh .. {{ error }}</div>
    <Suspense>
      <template #default>
        <div>
          <Event />
          <AsyncEvent />
        </div>
      </template>
      <template #fallback> Loading.... </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured, defineAsyncComponent } from "vue";

import Event from "./Event.vue";

const AsyncEvent = defineAsyncComponent(() => import("./Event.vue"));
export default {
  components: {
    Event,
    AsyncEvent,
  },

  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      // 阻止错误继续冒泡
      return true;
    });
    return { error };
  },
};
</script>
