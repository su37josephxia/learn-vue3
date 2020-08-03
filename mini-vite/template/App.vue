<template>
  <div>
    <style>
      .container {
          position: absolute;
          width: 100%;
          height: 100%;
      }
      .left {
          float: left;
          width: 200px;
          height: 100%;
          background-color: #ffffff;
      }
      .right {
          float: none;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
      }
    </style>
    <div class="container">
      <div class="left">
        <ul v-for="name in menu" v-bind:key="name">
          <li><a :href="'/' + name">{{name}}</a></li>
        </ul>
      </div>
      <div class="right" v-html="markdown"></div>
    </div>
  </div>
</template>
<script>
</script>