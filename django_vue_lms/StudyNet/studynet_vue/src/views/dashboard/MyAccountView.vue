<template>
  <div class="my-account">

    <title-area :title="'My Acoount'"></title-area>

    <section class="section">
      <button @click="logout()" class="button is-primary">Log out</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import TitleArea from "@/components/TitleArea";

export default {
  name: "MyAccount",
  components: {TitleArea},
  methods: {
    logout() {
      console.log('Logging out');

      //Todo: Fix and activate
/*      axios.post('api/v1/token/logout/')
          .then(response => {
            console.log('Logged out successfully.');
          })
          .catch(error => {
            console.error('Failed to log out:', error);
          });*/

      axios.defaults.headers.common['Authorization'] = "";

      localStorage.removeItem('token');

      this.$store.commit('removeToken');

      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>