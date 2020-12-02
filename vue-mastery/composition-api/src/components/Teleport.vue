<template>
  <div>
    <teleport to="#end-of-body">
      【Teleport : This should be at the end 】
      <img src="../assets/flower.gif" alt="" />
    </teleport>
    <div>【Teleport : This should be at the top】</div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
export default {
  setup(props, context) {
      
  },
};
</script>