<template>
  <button type="button" class="collapsible" v-on:click="clickCollapsible()">{{ textClosed }}</button>
  <div class="content">
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: "Collapsible",
  mounted() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    console.log("Add event listeners")
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  },
  methods: {
    clickCollapsible() {
      console.log("clicked")
    }
  },
  props: {
    textClosed: String,
    content: String,
  }
}

</script>

<style scoped>
/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  margin-bottom: 10px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}

</style>