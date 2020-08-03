<template>
  <div>
    <ul>
      <li>kkb</li>
      <li v-for="todo in todos" v-bind:key="todo">{{todo}}</li>
    </ul>
  </div>
</template>
<script>
</script>