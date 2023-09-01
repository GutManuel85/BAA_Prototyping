<template>
  <nav class="breadcrumb is-info" aria-label="breadcrumbs">
    <ul>
      <div
          v-for="crumb in crumbs"
          v-bind:key="crumb.id"
      >
      <li><router-link v-bind:to="`${crumb.slug}`">{{crumb.text}} ></router-link></li>
      </div>
      <li class="is-active"><router-link to="#" aria-current="page">{{last_crumb.text}}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data(){
  },
  props: {
    crumbs: Array, //for example: crumbs: [{slug:"/", text: "Home"}, {slug: "courses", text: "Courses"}],
    last_crumb: Object, //for example: last_crumb: {slug: "courses/web-development", text: "Web Development"},
  }
}
</script>

<style scoped>

</style>