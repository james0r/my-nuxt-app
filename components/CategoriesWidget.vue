<template>
  <!-- Categories widget-->
  <section class="category-widget">
    <div class="card mb-4">
      <div class="card-header">Categories</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!">Web Design</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
       document: {}
    }
  },
  async fetch() { 
    const document = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'category')
    )
    if (document) {
      this.document = document
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style>

</style>