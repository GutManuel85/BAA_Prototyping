<template>
  <div class="playground">

    <title-area :title="'Drag & Drop built in'"></title-area>

    <section class="section">
      <p>Link: <a href="https://learnvue.co/articles/vue-drag-and-drop">https://learnvue.co/articles/vue-drag-and-drop</a></p>
      <hr>
      <div>
        <div
            class="drop-zone"
            @drop="onDrop($event, 1)"
            @dragover.prevent
            @dragenter.prevent
        >
          <h4 class="title is-4">List 1</h4>
          <div
              class="drag-el"
              v-for="item in listOne"
              :key="item.title"
              draggable="true"
              @dragstart="startDrag($event, item)">
            {{ item.title }}
          </div>
        </div>
        <div
            class="drop-zone"
            @drop="onDrop($event, 2)"
            @dragover.prevent
            @dragenter.prevent
        >
          <h4 class="title is-4">List 2</h4>
          <div
              class="drag-el"
              v-for="item in listTwo"
              :key="item.title"
              draggable="true"
              @dragstart="startDrag($event, item)">
            {{ item.title }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea";
export default {
  name: "Playground1",
  components: {TitleArea},
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
      ],
    }
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
}

</script>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
