<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <!-- Post content-->
          <article>
            <!-- Post header-->
            <header class="mb-4">
              <!-- Post title-->
              <h1 class="fw-bolder mb-1">
                {{ $prismic.asText(post.data.title) }}
              </h1>
              <!-- Post meta content-->
              <div class="text-muted fst-italic mb-2">
                Posted on
                {{
                  this.$formatDate($prismic.asDate(post.first_publication_date))
                }}
                by
                <prismic-link :field="post.data.author.data.author_website">{{
                  post.data.author.data.full_name
                }}</prismic-link>
              </div>
              <!-- Post tags-->
              <div class="tags-row">
                <span>Tags:</span>
                <ul>
                  <li
                    v-for="(tag, index) in tags"
                    :key="index"
                    :data-tag="tag.uid"
                  >
                    <a
                      v-text="tag.name"
                      class="
                        badge
                        bg-secondary
                        text-decoration-none
                        link-light
                        text-white
                        mr-2
                        px-2
                      "
                      :href="`/tag/${tag.uid}`"
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- Post categories-->
              <div class="categories-row">
                <span>Categories: </span>
                <ul>
                  <li
                    v-for="(cat, index) in categories"
                    :key="index"
                    :data-category="cat.uid"
                  >
                    <a
                      v-text="cat.name"
                      class="
                        badge
                        bg-secondary
                        text-decoration-none
                        link-light
                        text-white
                        mr-2
                        px-2
                      "
                      :href="`/category/${cat.uid}`"
                    ></a>
                  </li>
                </ul>
              </div>
            </header>
            <!-- Preview image figure-->
            <figure class="featured-image-wrapper mb-4">
              <prismic-image
                :field="post.data.featured_image"
                class="featured-image"
              />
            </figure>
            <!-- Post content-->
            <section class="mb-5">
              {{ $prismic.asText(post.data.content) }}
            </section>
          </article>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <h2>Prismic Slices</h2>
          <slice-zone type="blog_single" uid="blog-single" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  head() {
    return {
      title: `${this.$prismic.asText(this.post.data.title)} - My-Nuxt-Prismic`,
    }
  },
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('my.post.uid', params.uid),
      {
        fetchLinks: [
          'author.full_name',
          'author.author_website',
          'tag.uid',
          'tag.name',
          'category.uid',
          'category.name',
        ],
      }
    )
    if (document) {
      return { post: document.results[0] }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    tags() {
      return this.post.data.tags.map((tag) => {
        return tag.tag.data
      })
    },
    categories() {
      return this.post.data.categories.map((category) => {
        return category.category.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.featured-image-wrapper {
  padding-top: 44%;
  position: relative;
}

.categories-row,
.tags-row {
  margin-bottom: .5rem;

  ul {
    display: inline-flex;
    padding-left: 0px;
    list-style: none;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
}

@media (max-width: 576px) {
  .featured-image-wrapper {
    padding-top: 66.666%;
  }
}

.featured-image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>