<template>
  <div class="playground">

    <title-area :title="'Slider'"></title-area>

    <section class="section">

      <p>Link für Slider: <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider">
        https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider</a>
      </p>

      <p>Link für Value-Übergabe von Child to Parent:
        <a href="https://www.google.com/search?q=how+to+pass+a+value+from+child+to+parent+in+vue&rlz=1C1CSMH_deCH994CH994&sxsrf=AJOqlzXR-9OG-aTNIhyPo6emEDMqgCwPgA:1679398820104&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiD0-6Q-Oz9AhUM97sIHTXRAzkQ_AUoAXoECAIQAw&biw=1536&bih=714&dpr=1.25#fpstate=ive&vld=cid:bec2e3f2,vid:nZY4y02bMTw">
        Video</a>
      </p>

      <hr>
      <Slider
          :label="'The sliderValue in Child is: '"
          :getSliderValue = getSliderValue
      >
      </Slider>
      <p>The sliderValue in Parent is: {{sliderValue}}</p>
      <hr>

      <div class="container">
        <ProgressCircle :percent=sliderValue :transition=0></ProgressCircle>
      </div>
      <hr>

    </section>
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import ProgressCircle from "@/components/ProgressCircle";
import Slider from "@/components/Slider";
import TitleArea from "@/components/TitleArea";

export default {
  name: "Playground3",
  components: {TitleArea, Slider, ProgressCircle, CircleProgress}, //has to be here
  data() {
    return{
      sliderValue: 50,
    }
  },
  methods:{
    getSliderValue(sliderValue){
      this.sliderValue = parseInt(sliderValue);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../my_styles.scss";

</style>