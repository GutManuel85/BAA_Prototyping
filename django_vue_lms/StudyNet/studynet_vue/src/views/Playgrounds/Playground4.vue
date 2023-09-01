<template>
  <div class="playground">

    <title-area :title="'Color Picker'"></title-area>

    <section class="section">

      <p>Link:
        <a href="https://m.youtube.com/watch?v=eIw-Nou9L9E">
          https://m.youtube.com/watch?v=eIw-Nou9L9E</a>
      </p>
      <hr>

        <div id="used">
          <div class="color_picker">
            <div>
              <label>Color as hex-value: </label>
              <input type="text" id="hex_value" v-on:keyup.enter="setColor(true)">
            </div>
            <div>
              <label>Choose a color: </label>
              <input type="color" id="color" v-on:input="setColor(false)">
            </div>
            <div v-if="errors.length" id="errorMessage" class="notification is-danger">{{errors[0]}}</div>
          </div>
        </div>

    </section>
    <section class="section">
      <title-area id="toColor" :title="'Please color me as you wish'"></title-area>
    </section>

  </div>

</template>

<script>
import TitleArea from "@/components/TitleArea";

export default {
  name: "Playground4",
  components: {TitleArea},
  data() {
    return {
      color: null,
      colorInput: null,
      hexInput: null,
      errors: [],
    }
  },
  methods: {
    setColor(setWithHex) {
      this.errors = [];
      let hex_regex = /[0-9A-Fa-f]{6}/g;
      this.colorInput = document.querySelector('#color');
      this.hexInput = document.querySelector('#hex_value');
      if(!setWithHex) {
        this.color = this.colorInput.value;
        this.hexInput.value = this.color;
      }else if(this.hexInput.value.match(hex_regex)){
        this.color = this.hexInput.value;
        this.colorInput.value = this.color;
      }else{
        this.errors.push("Not a valid hex-value. Here an example: #aa336a");
      }
      document.getElementById("toColor").style.backgroundColor = this.color;
      console.log(this.color)
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../../my_styles.scss";

input {
  margin: 10px;
  max-width: 100px;
  min-width: 100px;
  justify-content: end;
}

#used{
  margin-right: 40%;
  text-align: right;
}

#toColor {
  color: $info-invert;
  background-color: $info;
}

#errorMessage{
  margin-top: 20px;
  margin-bottom: 10px;
}

</style>