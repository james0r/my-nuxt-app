<template>
  <section class="search-widget">
    <div class="card mb-4">
      <div class="card-header">Search Widget</div>
      <div class="card-body">
        <div class="input-group">
          <form action="/search">
            <input
              type="search"
              name="s"
              id="search"
              placeholder="Search"
              class="form-control"
            /> 
            <button
              type="submit"
            >Go!</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchWidget',
  data() {
    return {
    }
  },
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

<style scoped lang="scss">
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

form {
  display: flex;

  button {
    border: none;
  }
}
</style>
