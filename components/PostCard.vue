<template>
  <div class="card mb-4">
    <a href="#!" class="card-image-wrapper bg-image">
      <prismic-image :field="bgImage"></prismic-image>
    </a>
    <div class="card-body">
      <div class="small text-muted">
        {{ formatDate($prismic.asDate(firstPublished)) }}
      </div>
      <h2 class="card-title">{{ $prismic.asText(title) }}</h2>
      <p class="card-text">{{ excerpt }}</p>
      <a href="#!" class="btn btn-primary">Read more →</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bgImage', 'uid', 'title', 'excerpt', 'firstPublished'],
  methods: {
    formatDate(dateObj) {
      const options = {
        day: 'numeric',
        month: 'long', //to display the full name of the month
        year: 'numeric',
      }

      return dateObj.toLocaleDateString("en-US", options);
    },
  },
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