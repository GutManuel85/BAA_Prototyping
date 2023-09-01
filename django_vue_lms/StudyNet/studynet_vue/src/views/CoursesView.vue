<template>
  <div class="courses">
    <title-area :title="'Courses'"></title-area>

    <section class="section">
      <div class="container">

        <div class="columns content">
          <div class=" column is-2">
            <aside class="menu">
              <h4 class="menu-label">Categories</h4>
              <div class="menu-list">
                <a v-on:click="filterCoursesWithCategory('all categories')">All Categories</a>
                <div v-for="category in categories">
                  <a v-on:click="filterCoursesWithCategory(category.title)">{{ category.title }}</a>
                </div>
              </div>
            </aside>
          </div>

          <div class="column is-10">

            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="Find a course" v-on:input="filteredCourses()"
                       v-model="searchTerm">
              </p>
            </div>

            <hr>

            <div class="columns is-multiline">

              <div
                  class="column is-4"
                  v-for="course in courses"
                  v-bind:key="course.id"
              >
                <div class="card">
                  <!--Line belows refers to the router/index.js and uses the view with the name 'Course' and defines the parameter slug -->
                  <router-link v-bind:to="{name: 'Course', params: {slug: course.slug}}">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img v-bind:src="course.get_image" alt="Picture">
                      </figure>
                    </div>

                    <div class="card-content">
                      <div class="media">
                        <div id="card-title" class="media-content">
                          <p class="card-text is-size-5">{{ course.title }}</p>
                        </div>
                      </div>

                      <div class="content">
                        <p class="card-text">{{ course.short_description }}</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="column is-12">
                <nav class="pagination">
                  <a class="pagination-previous">Previous</a>
                  <a class="pagination-next">Next</a>

                  <ul class="pagination-list">
                    <li>
                      <a class="pagination-link is-current">1</a>
                    </li>
                    <li>
                      <a class="pagination-link">2</a>
                    </li>
                    <li>
                      <a class="pagination-link">3</a>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios';
import TitleArea from "@/components/TitleArea";

export default {
  name: "CoursesView.vue",
  components: {TitleArea},
  data() {
    return {
      allCourses: [],
      courses: [],
      allCategories: [],
      categories: [],
      searchTerm: '',
    }
  },
  mounted() { //mounted(): lifecycle hook that gets called after the Vue instance has been mounted to the DOM.
    console.log('mounted')

    axios
        .get('api/v1/courses/')
        .then(response => {
          console.log(response.data);
          this.courses = response.data;
          this.allCourses = response.data;
        })

    axios
        .get('api/v1/courses/categories/')
        .then(response => {
          console.log(response.data)
          this.categories = response.data;
          this.allCategories = response.data;
        })
  },

  methods: {
    filterCoursesWithCategory(categoryTitle) {
      this.courses = this.allCourses;
      if (categoryTitle != 'all categories') {
        this.courses = this.courses.filter(course => {
          return course.categories.some(category => category.title === categoryTitle);
        });
      } else {
        this.courses = this.allCourses;
      }
    },
    filteredCourses() {
      this.courses = this.allCourses;
      const searchTerm = this.searchTerm.toLowerCase();
      this.courses = this.courses.filter(course =>
          course.title.toLowerCase().includes(searchTerm)
      );
    }
  }
}

</script>

<style scoped lang="scss">
@import "../../my_styles.scss";

#card-title {
  min-height: 60px;
}

.card {
  padding-top: 30px;
  height: 500px;
}

.card:hover {
  background-color: $primary;

  .card-text {
    color: $primary-invert;
  }
}

</style>