<template>
  <div>
    <teleport to="#end-of-body" :disabled="!showText">
      <!-- 【Teleport : This should be at the end 】 -->
      <div>
        <video src="../assets/flower.webm" muted controls="controls" autoplay="autoplay" loop="loop">
          
        </video>
      </div>
    </teleport>
    <div>【Teleport : This should be at the top】</div>
    <button @click="showText = !showText">Toggle showText</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const showText = ref(false);
    setInterval(() => {
      showText.value = !showText.value;
    }, 1000);
    return { showText };
  },
};
</script>