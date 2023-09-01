<template>
  <div class="playground">

<title-area title="Message Demo"></title-area>

    <section class="section">
      <br>
      <p>Link:
        <a href="https://www.youtube.com/watch?v=HorXomQrOi8">
          https://www.youtube.com/watch?v=HorXomQrOi8</a>
      </p>

      <p>Link:
        <a href="https://github.com/TylerPottsDev/vue-popups-yt/tree/main/src">
          https://github.com/TylerPottsDev/vue-popups-yt/tree/main/src</a>
      </p>

      <hr>
      <h4 class="title is-4">Message Demo</h4>

      <div class="myMessages">
        <message message-title="Primary" color="primary">
          <div class="is-center">
            This is a Primary Message
          </div>
        </message>
      </div>

      <div class="myMessages">
        <message message-title="Success" color="success">
          <div class="is-center">
            This is a success message
          </div>
        </message>
      </div>

      <div class="myMessages">
        <message message-title="Warning" color="warning">
          <div class="is-center">
            This is a warning message
            <hr>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </message>
      </div>

    </section>
  </div>

</template>

<script>
import TitleArea from "@/components/TitleArea";
import Message from "@/components/Message";
export default {
  name: "Playground10",
  components: {Message, TitleArea}
}
</script>

<style scoped>

.myMessages{
  margin: 2%
}

</style>