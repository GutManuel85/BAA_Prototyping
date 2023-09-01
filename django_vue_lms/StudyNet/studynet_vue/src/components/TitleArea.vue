<template>
  <div class="hero is-info">
    <div class="hero-body has-text-centered">
      <h1 class="title">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleArea",
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>