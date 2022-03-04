<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a
        class="navbar-brand"
        target="_blank"
        href="https://mdbootstrap.com/docs/standard/"
      >
        My-Nuxt-Prismic
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#intro">Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
              rel="nofollow"
              target="_blank"
              >Learn Bootstrap 5</a
            >
          </li>
        </ul>

        <ul class="navbar-nav d-flex flex-row">
          <!-- Icons -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
              rel="nofollow"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://www.facebook.com/mdbootstrap"
              rel="nofollow"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://twitter.com/MDBootstrap"
              rel="nofollow"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              rel="nofollow"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>