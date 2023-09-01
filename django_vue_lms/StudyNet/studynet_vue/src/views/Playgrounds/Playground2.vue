<template>
  <div class="playground">

    <title-area :title="'Progress Circles'"></title-area>

    <section class="section">
      <p>Link: <a href="https://www.npmjs.com/package/vue3-circle-progress">https://www.npmjs.com/package/vue3-circle-progress</a>
      </p>

      <hr>

      <h4 class="title is-4">Circle with Component</h4>
      <div class="columns">
        <div class="column" v-for="element in percents">
          <ProgressCircle :percent="element"></ProgressCircle> <!-- My vue component -->
        </div>
      </div>

      <hr>
      <h4 class="title is-4">My circle here created</h4>
      <circle-progress
          :percent="100"
          :size="100"
          :border-width="8"
          :border-bg-width="15"
          :is-gradient="true"
          :show-percent="true"
          :gradient="{
        angle: 90,
        startColor: '#7CFC00',
        stopColor: '#009900'}">
      </circle-progress>

      <hr>
      <h4 class="title is-4">My circle here created</h4>
      <circle-progress :percent="40"/>

      <hr>
      <h4 class="title is-4">Default Gradient</h4>
      <circle-progress :is-gradient="true"/>

      <hr>
      <h4 class="title is-4">Customize Gradient</h4>
      <circle-progress
          :is-gradient="true"
          :gradient="{
        angle: 90,
        startColor: '#ff0000',
        stopColor: '#ffff00'
    }"
      />

      <hr>
      <h4 class="title is-4">Default Shadow</h4>
      <circle-progress :is-bg-shadow="true"/>

      <hr>
      <h4 class="title is-4">Customized Shadow</h4>
      <circle-progress
          :is-bg-shadow="true"
          :bg-shadow="{
        inset: true,
        vertical: 2,
        horizontal: 2,
        blur: 4,
        opacity: .4,
        color: '#000000'
    }"
          empty-color="#f7f7f7"
          :border-width="6"
          :border-bg-width="30"
      />

    </section>
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import ProgressCircle from "@/components/ProgressCircle";
import TitleArea from "@/components/TitleArea";

export default {
  name: "Playground2",
  components: {TitleArea, ProgressCircle, CircleProgress}, //has to be here
  data() {
    return {
      percents: [10,30,60,90,100]
      //percentProgress: 10
    }
  }
}
</script>

<style scoped lang="scss">
circle-progress {
}

</style>