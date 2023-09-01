<template>
  <div class="playground">

    <title-area :title="'Markdown'"></title-area>

    <section class="section">
      <collapsible
          text-closed="Show Syntax"
          content='<p># Heading 1</p><p>## Heading 2</p><p>### Heading 3</p><p>**bold text**</p><p>*italicized text*</p><p>> blockquote</p><p>1. First item</p><p>2. Second item</p><p>3. Third item</p><p>- First item</p><p>- Second item</p><p>- Third item</p><p>`This is my code`</p><p>---</p><p>[title](https://www.example.com)</p><p>![alt text](image.jpg)</p>'
      >
      </collapsible>

      <br>

      <textarea class="textarea" v-model="markdownInput" placeholder="# this is a heading 1"></textarea>
      <br>
      <input type="submit" class="button is-primary" v-on:click="transformMarkdownToHTML()">
      <hr>
      <h6 class="title is-6">This is the html-code:</h6>
      <p>{{ html }}</p>
      <hr>
      <h6 class="title is-6">It will be shown like this:</h6>
      <p v-html="html"></p>
    </section>
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea";
import {Remarkable} from 'remarkable';
import Collapsible from "@/components/Collapsible";

const md = new Remarkable({
      html: false,        // Enable HTML tags in source
      xhtmlOut: false,        // Use '/' to close single tags (<br />)
      breaks: true,        // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-',  // CSS language prefix for fenced blocks

      // Enable some language-neutral replacement + quotes beautification
      typographer: false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed
      highlight: function (/*str, lang*/) {
        return '';
      }
    }
);

export default {
  name: "Playground7",
  components: {Collapsible, TitleArea},
  data() {
    return {
      markdownInput: null,
      html: null,
    }
  },
  methods: {
    transformMarkdownToHTML() {
      let pureHtml = md.render(this.markdownInput);
      this.html = `<div class="content">${pureHtml}</div>`
    }
  }
}

</script>

<style scoped>

</style>