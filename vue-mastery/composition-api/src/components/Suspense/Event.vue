<template>
  <div>Event Result is {{ count }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    const count = ref(null);
    function getEventCount() {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
          console.log('error.....',Math.random())
          // 随机返回时间
          reject('get Event Error.');
        } else {
          // 随机出错
          setTimeout(() => resolve(3), 1000);
        }
      });
    }

    try {
      count.value = await getEventCount();
    } catch (e) {
      throw e
    }

    return { count };
  },
};
</script>