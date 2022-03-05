<template>
  <div class="py-5 px-3 bg-light border-bottom mb-4">
      <div class="text-center my-5">
          <h1 class="fw-bolder">{{ title }}</h1>
          <p class="lead mb-0">{{ subtitle }}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style>

</style>