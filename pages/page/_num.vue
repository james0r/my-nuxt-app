<template>
  <div>
    <PageTitle
      title="Welcome to My-Nuxt-Prismic Blog"
      subtitle="A demo of Nuxt.js leveraging many Prismic features."
    />
    <div class="container">
      <div class="row">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <!-- Nested row for non-featured blog posts-->
          <div class="row">
            <div class="col-lg-6">
              <PostCard
                v-for="post in firstColPosts"
                :key="post.uid"
                :bgImage="post.data.featured_image"
                :firstPublished="post.first_publication_date"
                :title="post.data.title"
                :uid="post.uid"
                :excerpt="post.data.excerpt"
              />
            </div>
            <div class="col-lg-6">
              <PostCard
                v-for="post in secondColPosts"
                :key="post.uid"
                :firstPublished="post.first_publication_date"
                :bgImage="post.data.featured_image"
                :title="post.data.title"
                :uid="post.uid"
                :excerpt="post.data.excerpt"
              />
            </div>
          </div>
          <!-- Pagination-->
          <nav aria-label="Pagination">
            <hr class="my-0" />
            <ul class="pagination justify-content-center my-4">
              <li class="page-item" v-bind:class="{ disabled: isFirstPage }">
                <nuxt-link class="page-link" :to="prevPage">« Newer</nuxt-link>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#!">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#!">2</a></li>
              <li class="page-item"><a class="page-link" href="#!">3</a></li>
              <li class="page-item disabled">
                <a class="page-link" href="#!">...</a>
              </li>
              <li class="page-item"><a class="page-link" href="#!">15</a></li>
              <li class="page-item">
                <nuxt-link class="page-link" :to="nextPage">Older »</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <!-- Search widget-->
          <div class="card mb-4">
            <div class="card-header">Search</div>
            <div class="card-body">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter search term..."
                  aria-label="Enter search term..."
                  aria-describedby="button-search"
                />
                <button
                  class="btn btn-primary"
                  id="button-search"
                  type="button"
                >
                  Go!
                </button>
              </div>
            </div>
          </div>
          <!-- Categories widget-->
          <div class="card mb-4">
            <div class="card-header">Categories</div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <ul class="list-unstyled mb-0">
                    <li><a href="#!">Web Design</a></li>
                    <li><a href="#!">HTML</a></li>
                    <li><a href="#!">Freebies</a></li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul class="list-unstyled mb-0">
                    <li><a href="#!">JavaScript</a></li>
                    <li><a href="#!">CSS</a></li>
                    <li><a href="#!">Tutorials</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Side widget-->
          <div class="card mb-4">
            <div class="card-header">Side Widget</div>
            <div class="card-body">
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: 'Home - My-Nuxt-Prismic',
    }
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'post'),
      {
        orderings: '[document.first_publication_date]',
        page: +params.num == 2 ? 1 : params.num,
        pageSize: +params.num == 2 ? 16 : 8,
      }
    )
    if (document) {
      return { posts: document.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    featuredPost() {
      return this.posts[0]
    },
    firstColPosts() {
      if (this.isSecondPage) {
        return this.posts
          .filter((post, index) => {
            if (index > 6) {
              return index % 2 != 0
            } else {
              return false
            }
          })
      } else {
        return this.posts
          .filter((post, index) => {
            return index % 2 == 0
          })
      }
    },
    secondColPosts() {
      if (this.isSecondPage) {
        return this.posts
          .filter((post, index) => {
            if (index > 6) {
              return index % 2 == 0
            } else {
              return false
            }
          })
      } else {
        return this.posts
          .filter((post, index) => {
            return index % 2 != 0
          })
      }
    },
    isFirstPage() {
      return +this.$route.params.num == 1
    },
    isSecondPage() {
      return +this.$route.params.num == 2
    },
    prevPage() {
      if (this.$route.params.num === '2') return '/'
      return '/page/' + (+this.$route.params.num - 1)
    },
    nextPage() {
      return '/page/' + (+this.$route.params.num + 1)
    },
    start() {
      return (+this.$route.params.num - 1) * 8 + 1
    },
  },
}
</script>
