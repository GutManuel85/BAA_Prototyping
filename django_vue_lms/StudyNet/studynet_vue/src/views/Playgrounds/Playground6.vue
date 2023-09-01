<template>
  <div class="playground">
  <title-area title="Bread Crumbs"></title-area>

    <section class="section">

      <p>Link:
        <a href=" https://bulma.io/documentation/components/breadcrumb/">
          https://bulma.io/documentation/components/breadcrumb/</a>
      </p>

      <hr>
      <h4 class="title is-4">Manually created</h4>
      <nav class="breadcrumb is-info" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="courses">Courses</router-link></li>
          <li class="is-active"><router-link to="#" aria-current="page">Web Development</router-link></li>
        </ul>
      </nav>

      <hr>
      <h4 class="title is-4">Created with Component</h4>
      <breadcrumbs
          :crumbs="[{slug:'/', text: 'Home'}, {slug: 'courses', text: 'Courses'}]"
          :last_crumb="{slug: 'courses/web-development', text: 'Web Development'}"
      ></breadcrumbs>

    </section>

  </div>

</template>

<script>
import TitleArea from "@/components/TitleArea";
import Breadcrumbs from "@/components/Breadcrumbs";
export default {
  name: "Playground6",
  components: {Breadcrumbs, TitleArea}
}
</script>

<style scoped>

.breadcrumb{
  margin-left: 20%;
}

.title{
  margin-left: 20%;
}
</style>