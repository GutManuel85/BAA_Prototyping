<template>
  <div class="course">

    <title-area :title="course.title"></title-area>

    <section class="section">
      <div class="container">
        <div class="columns content">
          <div class="column is-2">
            <h4>Table of contents</h4>

            <ul>
              <li
                  v-for="lesson in lessons"
                  v-bind:key="lesson.id"
              >
                <a @click="activeLesson = lesson">{{lesson.title}}</a></li>
            </ul>

          </div>
          <div class="column is-10">
            <template v-if="$store.state.user.isAuthenticated">
              <template v-if="activeLesson">
                <h2>{{activeLesson.title}}</h2>
                {{activeLesson.long_description}}


              </template>
              <template v-else>
                {{course.long_description}}
              </template>
            </template>
            <template v-else>
              <h2>Restricted access</h2>
              <p>You need to have an account to continue!</p>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import TitleArea from "@/components/TitleArea";

export default {
  name: "CourseView.vue",
  components: {TitleArea},
  data(){
    return {
      course: {},
      lessons: [],
      activeLesson: null,
      comment: {
        name: '',
        content: ''
      }
    }
  },
  mounted(){ //mounted(): lifecycle hook that gets called after the Vue instance has been mounted to the DOM.
    console.log('mounted')

    const slug = this.$route.params.slug

    axios
        .get(`api/v1/courses/${slug}`)
        .then(response =>{
          console.log(response.data)

          this.course = response.data.course
          this.lessons = response.data.lessons
        })
  },
  methods: {
    submitComment() {
      console.log("submit comment")

      axios
          .post(`/api/v1/courses/${this.course.slug}/${this.activeLesson.slug}`, this.comment)
          .then(response => {
            this.comment.name = '';
            this.comment.content = '';

            alert('The comment was added')
          })
          .catch(error => {
            console.log(error)
          })

    }
  }

}
</script>

<style scoped>

</style>