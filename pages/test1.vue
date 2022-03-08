<template>
  <div>
    <pre v-text="title"></pre>
  </div>
</template>

<script>
import smConfig from '../sm.json'

export default {
  data() {
    return {
      title: '',
    }
  },
  mounted() {
    const queryPredicate = `[[fulltext(document,"${this.$route.query.s}")]]`

    fetch(
      `${smConfig.searchEndpoint}?ref=${smConfig.masterRef}&q=${queryPredicate}`,
      {
        method: 'GET',
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        this.title = json
      })
  },
}
</script>

<style>
</style>