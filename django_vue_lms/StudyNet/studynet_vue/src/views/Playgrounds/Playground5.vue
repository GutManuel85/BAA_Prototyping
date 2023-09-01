<template>
 <div class="playground">
  <title-area title="Progressbar from Bulma"></title-area>
   <section class="section">

     <p>Link:
       <a href="https://bulma.io/documentation/elements/progress/">
         https://bulma.io/documentation/elements/progress/</a>
     </p>

     <hr>

     <h3 class="title is-3">Show Progress</h3>

     <progress class="progress is-small" value="20" max="100"></progress>

     <progress class="progress is-normal is-dark" value="40" max="100"></progress>

     <progress class="progress is-medium is-danger" value="60" max="100"></progress>

     <progress class="progress is-large is-primary" value="80" max="100"></progress>

     <hr>

     <h3 class="title is-3">Show Loading</h3>
     <!-- Without value-Attribute -->
     <progress class="progress is-small" max="100"></progress>
     <progress class="progress is-dark" max="100"></progress>
     <progress class="progress is-medium is-danger" max="100"></progress>
     <progress class="progress is-large is-primary" max="100"></progress>


   </section>
 </div>
</template>

<script>
import TitleArea from "@/components/TitleArea";
export default {
  name: "Playground5",
  components: {TitleArea}
}
</script>

<style scoped>

</style>