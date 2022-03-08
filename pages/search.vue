<template>
    <div>
    <PageTitle
      :title="`Posts matching search term: ${$route.query.s}`"
      subtitle="Posts are ordered by publication date"
    />
    <div class="container mt-5">
      <div class="posts-container mx-auto px-3 py-5">
        <ul class="list mb-5">
          <li
            v-for="post in posts"
            :key="post.id"
          >
            <span>{{ $formatDate($prismic.asDate(post.first_publication_date)) }}</span>
            <a :href="`/${post.uid}`"
              >{{ $prismic.asText(post.data.title) }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import smConfig from '../sm.json'

export default {
  data() {
    return {
      posts: {}
    }
  },
  mounted() {
    const queryPredicates = [
      'q=[[at(document.type,"post")]]',
      `q=[[fulltext(document, "${this.$route.query.s}")]]`
    ]

    fetch(
      `${smConfig.searchEndpoint}?ref=${smConfig.masterRef}&${queryPredicates.join('&')}`,
      {
        method: 'GET',
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        this.posts = json.results
      })
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