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
          <!-- Featured blog post-->
          <!-- <PostCard
            :bgImage="featuredPost.data.featured_image"
            :title="featuredPost.data.title"
            :uid="featuredPost.uid"
            :excerpt="featuredPost.data.excerpt"
            :firstPublished="featuredPost.first_publication_date"
          /> -->
          <!-- Nested row for non-featured blog posts-->
          <div class="row">
            <div class="col-lg-6">
              <PostCard
                v-for="(post) in firstColPosts"
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
                v-for="(post) in secondColPosts"
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
              <li class="page-item disabled">
                <a tabindex="-1" class="page-link">« Newer</a>
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
                <nuxt-link class="page-link" to="/page/2">Older »</nuxt-link>
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
        page: 1,
        pageSize: 8
      }
    )
    if (document) {
      return { posts: document.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    firstColPosts() {
      return this.posts.filter((post, index) => {
        return (index % 2 == 0)  
      })
    },
    secondColPosts() {
      return this.posts.filter((post, index) => {
        return (index % 2 != 0)
      })
    },
    currentPage() {
      return $route.params.page
    }
  },
}
</script>
