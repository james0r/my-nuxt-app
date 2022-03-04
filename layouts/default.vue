<template>
  <div>
    <Header></Header>
    <main class="site-main mb-5 overflow-auto">
      <Nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: 'default'
  }
</script>

<style>
  .navbar {
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
  }

  .site-main {
    margin-top: 58px;
  }

  @media (max-width: 991px) {
    .site-main {
      margin-top: 45px;
    }
  }
</style>