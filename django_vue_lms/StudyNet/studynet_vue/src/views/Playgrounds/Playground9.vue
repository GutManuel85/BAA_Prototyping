<template>

  <div class="playground">

    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <div class="columns is-vcentered">
          <div class="column"></div>
          <div class="column">
            <h1 class="title">Gif Demo </h1>
          </div>
          <div class="column">
            <div style="width:40%;height:0;padding-bottom:40%;position:relative;">
              <iframe src="https://giphy.com/embed/dAoHbGjH7k5ZTeQeBI" width="100%" height="100%"
                      style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>

    <section class="section">
      <br>
      <p>Link:
        <a href="https://gifer.com/de/gifs/sticker">
          https://gifer.com/de/gifs/sticker
        </a>
      </p>

      <p>Link:
        <a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_hackman">
          https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_hackman
        </a>
      </p>

      <p>Link:
        <a href=""></a>
      </p>

      <hr>
      <h4 class="title is-4">Gif</h4>

      <hr>
      <div class="myMessages">
        <message message-title="Why not?" color="primary">
          <div class="is-center">
            <img src="https://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="250"/>
          </div>
        </message>
      </div>

      <div class="myMessages">
        <message message-title="Well done!" color="success">
          <div class="is-center">
            <img src="./../../assets/gifs/win.gif" alt="">
          </div>
        </message>
      </div>

      <div class="myMessages">
        <message message-title="Sorry, that's wrong" color="warning">
          <div class="is-center">
            <img src="./../../assets/gifs/lose.gif" alt="">
          </div>
        </message>
      </div>

    </section>

  </div>

</template>

<script>
import Message from "@/components/Message";

export default {
  name: "Playground9",
  components: {Message},
}
</script>

<style scoped>

.myMessages{
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>