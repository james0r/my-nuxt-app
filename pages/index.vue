<template>
  <div class="container">
    <section class="text-center">
      <h4 class="mb-5"><strong>Latest posts</strong></h4>

      <div class="row">
        <div
          class="col-lg-4 mb-4"
          v-for="(post, index) in posts"
          :key="post.id"
          v-bind:class="[index % 3 == 0 ? 'col-md-12' : 'col-md-6']"
        >
          <PostCard
            :bgImage="post.data.featured_image"
            :uid="post.uid"
            :title="post.data.title"
            :excerpt="post.data.excerpt"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'post')
    )
    if (document) {
      return { posts: document.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
