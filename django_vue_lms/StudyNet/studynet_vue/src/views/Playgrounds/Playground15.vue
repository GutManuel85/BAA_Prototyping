<template>
  <div class="playground">
    <title-area title="Draggable two list advanced"></title-area>

    <section class="section">
      <br/>

      <message color="warning" :message-title="'Attention'">
        Die einzige richtig funktionierende Dokumentation. Da für vue3 eine andere Syntax verwendet werden muss als bei
        den meisten Tutorials in vue2
        <br>
        <hr>
        Link:
        <a href="https://github.com/SortableJS/vue.draggable.next"
        >https://github.com/SortableJS/vue.draggable.next</a
        >
      </message>

      <hr/>

      <h4 class="title is-4">Bad movies</h4>
      <draggable
          v-model="list0"
          group="movies"
          @start="drag=true"
          @end="dragEnd()"
          item-key="id">
        <template #item="{element}">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="./../../assets/pictures/bad.png" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ element.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </draggable>

      <hr>

      <h4 class="title is-4">Good movies</h4>
      <draggable
          v-model="list1"
          group="movies"
          @start="drag=true"
          @end="dragEnd()"
          item-key="id">
        <template #item="{element}">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="./../../assets/pictures/good.png" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ element.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </draggable>

      <hr>

      <h4 class="title is-4">Better movies</h4>
      <draggable
          v-model="list2"
          group="movies"
          @start="drag=true"
          @end="dragEnd()"
          item-key="id">
        <template #item="{element}">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="./../../assets/pictures/excellent.png" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ element.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </draggable>

    </section>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TitleArea from "@/components/TitleArea";
import Message from "@/components/Message";

export default {
  name: "Playground15",
  components: {Message, TitleArea, draggable},
  data() {
    return {
      drag: false,
      list0: [
        {name: "LEFT BEHIND", id: 0},
      ],
      list1: [
        {name: "The Hobbit I", id: 1},
        {name: "The Hobbit II", id: 2},
        {name: "The Hobbit III", id: 3},
      ],
      list2: [
        {name: "Lord of the Rings I", id: 4},
        {name: "Lord of the Rings II", id: 5},
        {name: "Lord of the Rings III", id: 6}
      ]
    };
  },
  methods: {
    dragEnd() {
      this.drag = false;
      console.log("Good movies:")
      console.log(this.list1);
    }
  }
};


</script>

<style scoped></style>
