<template>
  <div class="signup">

    <title-area :title="'Sign up'"></title-area>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <form class="has-text-left" v-on:submit.prevent="submitForm">
              <div class="field">
                <label>Email</label>
                <div class="control">
                  <input type="email" class="input" v-model="username">
                </div>
              </div>

              <div class="field">
                <label>Password</label>
                <div class="control">
                  <input type="password" class="input" v-model="password">
                </div>
              </div>

              <div class="field">
                <label>Repeat Password</label>
                <div class="control">
                  <input type="password" class="input" v-model="password2">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button class="button is-dark">Sign up</button>
                </div>
              </div>
              <hr>
              <div>
                If you have already an account
                <router-link to="/login">click here</router-link>
                to log in
              </div>

              <div class="notification is-danger" v-if="errors.length">
                <p
                    v-for="error in errors"
                    v-bind:key="error"
                >
                  {{ error }}
                </p>
              </div>

            </form>

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
  name: 'AboutView',
  components: {TitleArea},
  data() {
    return {
      username: '', //has to be named username
      password: '', //has to be named password
      password2: '',
      errors: []
    }
  },

  methods: {
    submitForm() {
      console.log("Form submitted");

      this.errors = [];

      if (this.username === '') {
        this.errors.push('The username is missing!')
      }

      if (this.password === '') {
        this.errors.push('The password is missing!')
      }

      if (this.password2 !== this.password) {
        this.errors.push('The passwords are not matching!')
      }

      if (!this.errors.length) {
        const formData = {
          username: this.username,
          password: this.password
        }

        //this.$router.push('/login')

        axios.post('api/v1/users/', formData) //api has to be named like this
            .then(response => {
              this.$router.push('/login')
            })
            .catch(error => {
              if (error.response) {
                for (const property in error.response.data) {
                  this.errors.push(`${property}: ${error.response.data[property]}`)
                }
                console.log(JSON.stringify(error.response.data));
              } else if (error.message) {
                this.errors.push('Something went wrong. Please try again');
                console.log(JSON.stringify(error));
              }
            })
      }
    }
  }

}
</script>