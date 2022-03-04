<template>
  <div class="card">
    <div
      class="bg-image hover-overlay ripple position-relative"
      data-mdb-ripple-color="light"
    >
      <prismic-image :field="bgImage" class="img-fluid" />
      <a href="#!">
        <div
          class="mask"
          style="background-color: rgba(251, 251, 251, 0.15)"
        ></div>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title" v-text="$prismic.asText(title)"></h5>
      <p class="card-text" v-text="excerpt"></p>
      <a :href="`/${uid}`" class="btn btn-primary">Read</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bgImage', 'uid', 'title', 'excerpt'],
}
</script>

<style lang="scss">
.bg-image {
  padding-top: 66.666%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;

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
</style>