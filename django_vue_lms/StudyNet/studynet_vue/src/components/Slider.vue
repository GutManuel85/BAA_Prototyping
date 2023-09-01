<template>
  <input type="range" min="0" max="100" v-model="value" v-on:input="getSliderValue(value)"
         class="slider" id="myRange">
  <p>{{ label }}: <span id="demo">{{ value }}</span></p>

</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      value: 50,
    }
  },
  props: {
    label: String, //not used in default implementation
    getSliderValue: Function
  },
  methods: {
    emitInputEvent() {
      this.$emit('input', this.value);
    }
  }
}

</script>

<style scoped lang="scss">

@import "../../my_styles.scss";

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: $active-color;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}
</style>