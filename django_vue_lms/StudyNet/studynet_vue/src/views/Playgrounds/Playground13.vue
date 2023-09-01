<template>
  <div class="playground">

    <title-area>Pop up with overlay</title-area>

    <section class="section">

      <PopUp ref="popUp" v-bind:message-title="'I am a Pop up'" v-bind:color="'primary'">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate doloribus eaque eius eligendi excepturi fugit, ipsa iure nemo nulla pariatur quae, ratione rem. A aperiam culpa eaque eligendi est excepturi exercitationem, ipsam iure laborum maxime molestiae neque nihil, non nostrum quis ratione, rerum soluta voluptatibus. A, aut dicta earum enim hic labore nam numquam sit vitae voluptate! Beatae eius ex fugiat non rem reprehenderit rerum. Atque blanditiis cumque dolor facilis fuga hic ipsam, obcaecati officia officiis rerum sunt ut. Ad animi at cum excepturi labore laboriosam laudantium magnam minus neque nihil officiis reiciendis tempora, tempore totam unde veniam voluptatem.
        <br>
        <img src="./../../assets/gifs/win.gif" alt="">
      </PopUp>

      <br>
      <p>Link:
        <a href="https://www.youtube.com/watch?v=L8CF_k4jWBo&list=PL4cUxeGkcC9iXItWKbaQxcyDT1u6E7a8a&index=14">
          https://www.youtube.com/watch?v=L8CF_k4jWBo&list=PL4cUxeGkcC9iXItWKbaQxcyDT1u6E7a8a&index=14</a>
      </p>

      <p>Link:
        <a href="https://github.com/TylerPottsDev/vue-popups-yt/tree/main/src">
          https://github.com/TylerPottsDev/vue-popups-yt/tree/main/src</a>
      </p>

      <hr>
      <h4 class="title is-4">Pop up with overlay here</h4>

      <button class="button is-primary" v-on:click="callShowPopUp()">Show pop up</button>

      <hr>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam aliquid amet aperiam autem consectetur culpa cum doloribus ducimus error et exercitationem, expedita explicabo hic ipsum iure natus pariatur porro possimus praesentium quae repellendus reprehenderit saepe sapiente sed sit. Animi et excepturi hic iure minima quia quod repellat, voluptatem. Aperiam atque consequuntur corporis doloremque, doloribus dolorum enim expedita inventore maxime nostrum odit placeat porro quidem quos similique tempora veniam. Nisi placeat, veniam. A alias assumenda aut autem consectetur debitis deserunt dolorem ea eaque earum eos eveniet excepturi fuga id illo in iste itaque iusto magni nam natus nisi nobis, odio officiis placeat porro possimus, quam quas ratione repellendus sequi tempora ullam unde ut vitae voluptas, voluptates. Amet aperiam dicta dignissimos dolorem ea eos expedita fuga laborum modi nam neque nulla, odit perspiciatis porro quae recusandae soluta tempora ut velit veniam. Amet aperiam assumenda beatae cumque deleniti deserunt doloremque est facilis harum id, illo incidunt iusto magni maiores modi necessitatibus odit officia praesentium quidem quisquam repellat, reprehenderit repudiandae saepe sequi suscipit ullam ut. Alias ea eius et exercitationem illum ipsam iste magni nemo perspiciatis quis sapiente soluta, voluptatem, voluptatibus? Corporis deleniti est eum facilis ipsa iste, libero magni nobis nulla praesentium quis, quo repellendus sapiente sequi velit? Doloremque fugit incidunt ipsa, maxime officia reiciendis sint voluptas! A aliquam aliquid corporis deserunt eaque eius eum ex facilis illo impedit iste iure modi, nam neque nesciunt nisi nobis pariatur perferendis ratione repellendus repudiandae rerum sit suscipit tempore totam vel veritatis voluptas? Aperiam, consectetur consequatur culpa earum, et eveniet fugit inventore, ipsam nihil perspiciatis saepe sit unde voluptate. Accusamus assumenda corporis, earum hic in incidunt molestiae molestias odit quidem repellendus saepe velit. Earum exercitationem ipsum iste, modi molestias non nulla, obcaecati perspiciatis placeat quisquam soluta vitae voluptates? A assumenda autem laboriosam quae sit? A accusantium ad delectus deserunt dolores explicabo facere iusto, molestias mollitia nam sit, veniam vitae. Alias aperiam at corporis delectus dolorem eveniet excepturi explicabo ipsum maiores nihil, nisi odio officiis placeat possimus quasi quo repellat sed velit vero voluptatum! Accusantium beatae deserunt error facilis hic quaerat quas veritatis! Alias amet animi, aspernatur, aut delectus dolor eos et fuga hic illum inventore itaque laudantium magnam molestiae natus nulla obcaecati perferendis quasi qui quia reprehenderit repudiandae voluptate! Amet asperiores culpa cumque doloribus facilis fugiat itaque necessitatibus officia, praesentium quasi quo ut? Adipisci aperiam architecto at autem commodi consectetur, delectus deleniti distinctio doloremque eligendi et exercitationem fuga ipsa iure laboriosam magnam minima natus obcaecati odio provident quasi quidem quisquam ratione reiciendis similique sint sit tempore temporibus tenetur totam ullam unde voluptas, voluptate? Doloremque molestiae necessitatibus quod unde. Accusantium adipisci aliquam asperiores beatae consequatur cum cumque delectus deserunt distinctio dolorem doloremque error excepturi exercitationem, harum illum ipsa itaque laboriosam, laborum magnam magni maiores minima natus neque non nostrum odit officia quasi ratione recusandae rem sapiente sint totam, veritatis. Doloribus eaque labore natus omnis quae recusandae, veniam. Ad animi aperiam architecto assumenda consectetur consequuntur delectus dicta distinctio dolor dolorem dolorum ducimus eos esse ex excepturi explicabo hic in inventore iste iusto maxime minus necessitatibus nisi numquam obcaecati possimus provident quidem, quod reiciendis, repellat sequi sit tempora temporibus totam vel voluptates voluptatibus! Ab blanditiis, ducimus eius eveniet harum illo illum laboriosam minus nemo quisquam. Ab, alias corporis cumque debitis delectus dolore dolorem iste neque odit saepe? Ad alias amet aspernatur at, beatae, doloremque ea error exercitationem fugiat harum inventore laborum magnam maiores molestiae natus optio perferendis quibusdam quisquam ratione recusandae similique ullam vel voluptatum! Ab alias commodi delectus deleniti deserunt dignissimos, dolorem exercitationem fuga fugit illo impedit in iste labore maxime modi nesciunt numquam officia pariatur placeat, provident quasi, repellat rerum saepe veniam voluptas? Asperiores atque corporis delectus doloremque et expedita fuga, ipsum modi nesciunt nostrum, quae reiciendis tempora! Amet dolorem eligendi illo illum molestias quia repudiandae sed temporibus. Accusantium adipisci amet at blanditiis cum cupiditate delectus deleniti, dicta dolores ducimus ea et exercitationem explicabo hic iste iusto modi nam necessitatibus nihil nisi praesentium provident qui quibusdam quo ratione reiciendis repudiandae rerum sed temporibus totam velit voluptas voluptate voluptatum! Accusamus atque consectetur deleniti dicta earum laboriosam libero nostrum numquam officiis perspiciatis, quas quasi quia sequi sint ullam veritatis vero? A adipisci alias at atque aut autem commodi corporis delectus distinctio dolore eaque eligendi exercitationem harum incidunt inventore, iusto maiores maxime minima modi nisi officiis pariatur quae quaerat quia quibusdam quo quod ratione reprehenderit ullam voluptates. At aut culpa dolore eveniet perferendis quos repudiandae sapiente temporibus ut veritatis. Accusamus labore numquam repellat! Distinctio dolores facilis nihil quibusdam quis? Animi, eius impedit incidunt labore laudantium numquam obcaecati rerum sapiente voluptatum. Aspernatur atque debitis ea est excepturi expedita, fugit harum illo itaque magni minima minus necessitatibus nobis nostrum quae quia, quibusdam quo repellendus repudiandae sapiente sit totam ullam velit voluptatem voluptatum. Accusantium aliquam architecto aut beatae commodi culpa delectus deserunt dignissimos distinctio dolor ea eum eveniet facilis id illum in ipsam laboriosam minima nihil, officia perferendis perspiciatis placeat porro possimus ratione saepe sapiente similique sint tempora temporibus unde velit voluptas voluptatibus. Adipisci asperiores at, ea earum exercitationem ipsum iste officiis suscipit unde voluptas! Atque, cum, eligendi et fuga id in inventore ipsam natus possimus saepe soluta veniam? Autem ducimus expedita fuga mollitia repellat tempore. Adipisci aperiam at autem consequuntur deserunt dolor, eos esse eveniet ex id ipsam laudantium, magnam, minus necessitatibus neque nulla omnis optio qui quos sint sit ullam vel. Esse, excepturi facilis nihil nisi possimus sint sunt. Atque blanditiis deleniti exercitationem expedita fuga harum inventore, magni obcaecati optio rerum tempore, veniam. Asperiores consectetur corporis cumque dolor dolore doloremque eaque, exercitationem id ipsam ipsum iusto magni minima nemo porro quidem reiciendis repudiandae ullam? Aliquam eveniet excepturi, nam possimus similique vitae. A, aperiam asperiores beatae delectus doloribus eaque facere, impedit inventore labore maxime minima molestiae necessitatibus neque nisi quos repellendus reprehenderit sed tenetur ut veniam veritatis voluptate voluptatem. Atque commodi consectetur distinctio esse porro praesentium qui quia. A accusamus animi aperiam architecto autem, consectetur cumque debitis eos fugiat magni minus molestiae, nobis optio pariatur quia quo quod ut voluptatum?</p>

    </section>
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea";
import Message from "@/components/Message";
import PopUp from "@/components/PopUp";

export default {
  name: "Playground12.vue",
  components: {PopUp, Message, TitleArea},

  data() {
    return {
    }
  },
  methods: {
    callShowPopUp() {
      console.log("show pop up clicked on parent");
      this.$nextTick(() => {
        this.$refs.popUp.showPopUp();
      });
    },
  }

}
</script>

<style>
</style>