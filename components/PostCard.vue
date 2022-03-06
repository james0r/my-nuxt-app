<template>
  <div class="card mb-4">
    <a :href="uid" class="card-image-wrapper bg-image">
      <prismic-image :field="bgImage['non-featured'] ? bgImage['non-featured'] : bgImage"></prismic-image>
    </a>
    <div class="card-body">
      <div class="small text-muted">
        {{ this.$formatDate($prismic.asDate(firstPublished)) }}
      </div>
      <h2 class="card-title">{{ $prismic.asText(title) }}</h2>
      <p class="card-text">{{ excerpt }}</p>
      <a :href="uid" class="btn btn-primary">Read more →</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bgImage', 'uid', 'title', 'excerpt', 'firstPublished'],
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
.bg-image {
  padding-top: 41%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
  position: relative;
  min-height: 150px;

  img {
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

  a {
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
}

@media (min-width: 1200px) {
  .bg-image {
    min-height: 177px;
  }
}

@media (max-width: 576px) {
  .bg-image {
    min-height: 168px;
  }
}
</style>