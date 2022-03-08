<template>
  <section class="category-widget">
    <div class="card mb-4">
      <div class="card-header">Categories Widget</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li
                v-for="(cat, index) in categories"
                :key="index"
              >
                <a :href="`/category/${cat.uid}`">
                  {{ cat.name }}
                </a>
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
  name: 'CategoryWidget',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      document: {},
    }
  },
  async fetch() {
    this.document = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'category')
    )
  },
  computed: {
    categories() {
      if (this.document.results) {
        return this.document.results.map((cat) => {
          return {
            uid: cat.uid,
            name: cat.data.name
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
