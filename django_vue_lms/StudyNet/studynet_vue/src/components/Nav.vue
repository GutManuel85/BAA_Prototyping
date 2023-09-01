<template>

  <nav class="navbar" role="navigation" aria-label="main navigation" style="min-height: 5rem">
    <div class="navbar-brand">
      <router-link class="navbar-item is-size-4" to="/">WeSmart</router-link>
    </div>

    <div id="navbar-item" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/courses">Courses</router-link>
        <div class="navbar-item  has-dropdown is-hoverable">
          <a class="navbar-link">
            Playgrounds
          </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/playground8">Drag & Drop with draggable basic</router-link>
            <router-link class="navbar-item" to="/playground14">Drag & Drop w.d. two tables basic</router-link>
            <router-link class="navbar-item" to="/playground15">Drag & Drop w.d. two tables advanced</router-link>
            <router-link class="navbar-item" to="/kanbanboard">KanbanBoard</router-link>
            <router-link class="navbar-item" to="/playground2">Progress Circles</router-link>
            <router-link class="navbar-item" to="/playground5">Progress Bars</router-link>
            <router-link class="navbar-item" to="/playground3">Slider</router-link>
            <router-link class="navbar-item" to="/playground4">Color Picker</router-link>
            <router-link class="navbar-item" to="/playground6">Bread Crumbs</router-link>
            <router-link class="navbar-item" to="/playground7">Markdown</router-link>
            <router-link class="navbar-item" to="/playground9">Gif</router-link>
            <router-link class="navbar-item" to="/playground10">Message</router-link>
            <router-link class="navbar-item" to="/playground13">Pop up with my component</router-link>

            <hr class="navbar-divider">
            <p>***Not used stuff below:***</p>
            <router-link class="navbar-item" to="/playground12">Pop up with overlay</router-link>
            <router-link class="navbar-item" to="/playground11">Pop up with modal </router-link>
            <router-link class="navbar-item" to="/playground1">Drag & Drop built in</router-link>



          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="!$store.state.user.isAuthenticated">
              <router-link to="/signup"><a class="button is-primary"><strong>Sign up</strong></a></router-link>
              <router-link to="/login"><a class="button"><strong>Log in</strong></a></router-link>
            </template>
            <template v-if="$store.state.user.isAuthenticated">
              <router-link to="/dashboard/my-account"><a class="button is-primary"><strong>My Account</strong></a>
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Nav",
  methods: {}
}
</script>

<style scoped>

</style>