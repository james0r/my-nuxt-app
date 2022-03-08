<template>
  <div>
    <PageTitle
      :title="`Posts categorized as: ${$route.params.uid}`"
      :subtitle="`The posts below match the category ${$route.params.uid} and are ordered by the original publication date.`"
    />
    <div class="container mt-5">
      <div class="posts-container mx-auto px-3 py-5">
        <ul class="list mb-5">
          <li
            v-for="post in documents.results"
            :key="post.id"
          >
            <span>{{ $formatDate($prismic.asDate(post.first_publication_date)) }}</span>
            <a :href="post.url"
              >{{ $prismic.asText(post.data.title) }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Tags - My-Nuxt-Prismic`,
    }
  },
  async asyncData({ $prismic, params, error }) {
    const { id } = await $prismic.api.getByUID('category', params.uid)
    const documents = await $prismic.api.query(
      $prismic.predicates.at('my.post.categories.category', id),
      {
        orderings: '[document.first_publication_date]'
      }
    )
    if (documents) {
      return { documents }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    list-style: none;
    padding-left: 0px;

    span {
      float: right;
      color: #767676;
    }
  }
</style>