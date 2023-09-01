<template>
  <div class="playground">
    <title-area title="Draggable basic"></title-area>

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
      <h4 class="title is-4">Draggable Basic</h4>

      <draggable
          v-model="list1"
          group="people"
          @start="drag=true"
          @end="drag=false"
          item-key="id">
        <template #item="{element}">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="./../../assets/gifs/win.gif" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ element.name }}</p>
                  <p class="title is-6">Is on the {{ list1.indexOf(element) }} place in the array </p>
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
import Message from "@/components/Message"

export default {
  name: "Playground8",
  components: {Message, TitleArea, draggable},
  data() {
    return {
      drag: false,
      list1: [
        {name: "John", id: 1},
        {name: "Joao", id: 2},
        {name: "Jean", id: 3},
        {name: "Gerard", id: 4}
      ],
    };
  },
};
</script>

<style scoped></style>
