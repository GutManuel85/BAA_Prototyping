<template>
  <div id="overlay">
    <div id="content" class="has-text-centered">
      <Message v-bind:message-title="messageTitle" v-bind:color="color" v-bind:has-delete-button="false">
        <slot></slot>
        <br>
        <br>
        <button class="button is-dark" v-on:click="closePopUp">Close</button>
      </Message>
    </div>
  </div>

</template>

<script>
import Message from "@/components/Message";

export default {
  name: "PopUp",
  components: {Message},
  props: {
    messageTitle: String,
    color: String,
  },
  methods: {
    showPopUp() {
      console.log("show pop up clicked on child");
      document.getElementById("overlay").style.display = "block";
    },
    closePopUp() {
      console.log("close pop up clicked on child");
      document.getElementById("overlay").style.display = "none";
    }

  }
}
</script>

<style scoped>

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;

}

#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  overflow-y: scroll;
  height: 75%;
  width: 75%;
}


</style>