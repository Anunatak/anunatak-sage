<template>
  <div class="hello-div">
    Hello {{name}}
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        name: 'Boy'
      };
    },
  };
</script>

<style>
  .hello-div {
    color: red;
  }
</style>
