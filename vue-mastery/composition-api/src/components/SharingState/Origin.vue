<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Loading: {{ loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>


<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const searchInput = ref("");
    const results = ref(null);
    const loading = ref(false);
    const error = ref(null);

    function getEventCount() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(3), 1000);
      });
    }

    async function loadData(search) {
      loading.value = true;
      error.value = null;
      results.value = null;
      try {
        results.value = await getEventCount();
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    }

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        loadData(searchInput);
      } else {
        results.value = null;
      }
    });

    return { searchInput, results, loading, error };
  },
};
</script>