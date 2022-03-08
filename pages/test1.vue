<template>
  <div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  },
}
</script>

<style>
</style>