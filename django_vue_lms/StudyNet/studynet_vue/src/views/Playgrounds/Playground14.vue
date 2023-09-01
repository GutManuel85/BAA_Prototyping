<template>
  <div class="playground">
    <title-area title="Draggable two list basic"></title-area>

    <section class="section">
      <br/>

        <message color="warning" :message-title="'Attention'">
        Die einzige richtig funktionierende Dokumentation. Da für vue3 eine andere Syntax verwendet werden muss als bei den meisten Tutorials in vue2
          <hr>
          Wichtig: Die Listen, die miteinander interagieren können sollen, müssen in derselben group sein. Hier group="people"
          <hr>
          Link:
        <a href="https://github.com/SortableJS/vue.draggable.next"
        >https://github.com/SortableJS/vue.draggable.next</a
        >
        </message>

      <hr/>

      <h4 class="title is-4">First List</h4>
      <draggable
          v-model="list1"
          group="people"
          @start="drag=true"
          @end="dragEnd()"
          item-key="id">
        <template #item="{element}">
          <div>{{element.name}}</div>
        </template>
      </draggable>

      <hr>

      <h4 class="title is-4">Second List</h4>
      <draggable
          v-model="list2"
          group="people"
          @start="drag=true"
          @end="dragEnd()"
          item-key="id">
        <template #item="{element}">
          <div>{{element.name}}</div>
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
  name: "Playground14",
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
      list2: [
        {name: "Juan", id: 5},
        {name: "Edgard", id: 6},
        {name: "Johnson", id: 7}
      ]
    };
  },
  methods: {
    dragEnd(){
      this.drag = false;
      this.list1.forEach(subject => {
        console.log(subject);
      });
    }
  }
};


</script>

<style scoped></style>
