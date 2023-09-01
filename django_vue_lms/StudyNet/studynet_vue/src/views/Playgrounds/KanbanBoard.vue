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


        <div class="columns">

          <div class="column is-one-quarter mx-2 px-2 py-3 has-background-white-ter border rounded">
            <h6 class="title is-6">Idea 💡</h6>
            <draggable
                v-model="ideas"
                group="kanban"
                @start="drag=true"
                @end="drag=false"
                item-key="id">
              <template #item="{element}">
                <div class="has-background-white mb-3 p-2 shadow border rounded">
                  <p>{{ element.name }}</p>
                </div>
              </template>
            </draggable>
          </div>


          <div class="column is-one-quarter mx-2 px-2 py-3 has-background-white-ter border rounded">
            <h6 class="title is-6">Todo ✍</h6>
            <draggable
                v-model="todos"
                group="kanban"
                @start="drag=true"
                @end="drag=false"
                item-key="id">
              <template #item="{element}">
                <div class="has-background-white mb-3 p-2 shadow border rounded">
                  <p>{{ element.name }}</p>
                </div>
              </template>
            </draggable>

          </div>
          <div class="column is-one-quarter mx-2 px-2 py-3 has-background-white-ter border rounded">
            <h6 class="title is-6">In Progress 🗓</h6>
            <draggable
                v-model="inProgress"
                group="kanban"
                @start="drag=true"
                @end="drag=false"
                item-key="id">
              <template #item="{element}">
                <div class="has-background-white mb-3 p-2 shadow border rounded">
                  <p>{{ element.name }}</p>
                </div>
              </template>
            </draggable>

          </div>
          <div class="column is-one-quarter mx-2 px-2 py-3 has-background-white-ter border rounded">
            <h6 class="title is-6">Ready to go ✅</h6>
            <draggable
                v-model="completed"
                group="kanban"
                @start="drag=true"
                @end="drag=false"
                item-key="id">
              <template #item="{element}">
                <div class="has-background-white mb-3 p-2 shadow border rounded">
                  <p>{{ element.name }}</p>
                </div>
              </template>
            </draggable>

          </div>
        </div>
    </section>
  </div>
</template>


<script>
import draggable from "vuedraggable";
import TitleArea from "@/components/TitleArea";
import Message from "@/components/Message";

export default {
  name: "KanbanBoard",
  components: {
    Message,
    TitleArea,
    draggable,
  },
  data() {
    return {
      drag: false,
      ideas: [{name: "Migrate codebase to TypeScript", id: 1}],
      todos: [{name: "Dockerize App", id: 2}, {name: "Add vue.draggable to project", id: 3}],
      inProgress: [{name: "Implement Web5 Features", id: 4}, {name: "Bump to vite.js", id: 5}],
      completed: [],
    };
  },
};
</script>

<style scoped>
h6 {
  font-weight: 700;
}

.col {
  height: 90vh;
  overflow: auto;
}

.draggable-list {
  min-height: 2vh;
}

.draggable-list > div {
  cursor: pointer;
}
</style>



