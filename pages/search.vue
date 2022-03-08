<template>
    <div>
    <PageTitle
      :title="`Posts matching search term: ${searchterm}`"
      subtitle="Posts are ordered by publication date"
    />
    <div class="container mt-5">
      <div class="posts-container mx-auto px-3 py-5">
        <ul class="list mb-5">
          <li
            v-for="post in result"
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
  async asyncData({ $prismic, error, query }) {
    try {
      // Query for keyword
      const searchresult = await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'post'),
          $prismic.predicates.fulltext('document', query.search)
        ],
        { orderings: '[document.first_publication_date desc]'}
      )
 
      // Returns data to be used in template
      return {
        result: searchresult.results,
        searchterm: query.search
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss">
  .list {
    list-style: none; 
    padding-left: 0px;

    span {
      float: right;
      color: #767676;
    }
  }
</style>