<template>
  <div class="about">
    <title-area :title="'About'"></title-area>
    <section class="section">
      Some text
    </section>
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea";
export default {
  name: 'AboutView',
  components: {TitleArea},
}
</script>