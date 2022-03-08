<template>
  <section class="side-widget">
    <div class="card mb-4">
      <div class="card-header">
        <prismic-rich-text :field="slice.primary.title" class="title" />
      </div>
      <div class="card-body">
        <prismic-rich-text :field="slice.primary.description" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SideWidget',
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

<style lang="scss" scoped>
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

  p {
    margin-bottom: 0px !important;
  }
}

</style>

<style lang="scss">
.title {
  p {
    margin-bottom: 0px;
  }
}
</style>
