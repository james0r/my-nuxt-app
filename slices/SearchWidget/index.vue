<template>
  <section class="search-widget">
    <div class="card mb-4">
      <div class="card-header">Search Widget</div>
      <div class="card-body">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Enter search term..."
            aria-label="Enter search term..."
            aria-describedby="button-search"
          />
          <button class="btn btn-primary" id="button-search" type="button">
            Go!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchWidget',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
