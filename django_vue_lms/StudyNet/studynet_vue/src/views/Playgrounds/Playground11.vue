<template>
  <div class="playground">

    <title-area :title="'Pop up'"></title-area>

    <section class="section">

      <div v-bind:class="{'modal-background': isActive}"></div> <!-- fades out color of the rest of the page -->
      <div
          v-bind:class="{modal: true, 'is-active': isActive, 'modal-content': true, 'has-background-white':true, 'p-5': true}">
        <h3 class="title mb-6 has-text-centered">Hello I am a pop up</h3>
        <img src="https://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="250"/>
        <br>
        <button class="button is-primary" v-on:click="closePopUp()">Close</button>
      </div>

      <br>
      <p>Link:
        <a href="https://www.youtube.com/watch?v=L8CF_k4jWBo&list=PL4cUxeGkcC9iXItWKbaQxcyDT1u6E7a8a&index=14">
          https://www.youtube.com/watch?v=L8CF_k4jWBo&list=PL4cUxeGkcC9iXItWKbaQxcyDT1u6E7a8a&index=14</a>
      </p>

      <p>Link:
        <a href="https://github.com/TylerPottsDev/vue-popups-yt/tree/main/src">
          https://github.com/TylerPottsDev/vue-popups-yt/tree/main/src</a>
      </p>

      <hr>
      <h4 class="title is-4">Pop up native here</h4>

      <button class="button is-primary" v-on:click="showPopUp()">Show pop up</button>

      <hr>

      <h4 class="title is-4">Pop up with component</h4>


    </section>
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea";
import Message from "@/components/Message";

export default {
  name: "Playground11",
  components: {TitleArea, Message},
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    showPopUp() {
      console.log("show pop up");
      this.isActive = true;
      document.body.style.overflow = 'hidden'
    },
    closePopUp() {
      console.log("close pop up");
      this.isActive = false;
      document.body.style.overflow = 'scroll';
    }
  }
}
</script>

<style scoped>

</style>