<template>
  <v-container fluid class="editor container">
    <v-toolbar class="toolbar" app>
        <v-btn id="nav" fab @click="drawer = !drawer">≡</v-btn>
        editor
      </v-toolbar>
    <div class="row mt-4">
        <div class="col text-center">
          <h1 class="light"> Markdown Preview</h1>
        </div>
    </div>
    <v-layout align-space-between justify-space-between row fill-height>
      <v-flex xs3 v-if="this.phide">
        <h1>My Side {{phide}}</h1>
        <v-btn @click="goAway()">Hide</v-btn>
      </v-flex>
      <v-flex xs6>
        <div class="row mt-4">
          <div class="col-md-6">
            <v-tabs
              v-model="active"
              color="cyan"
              dark
              slider-color="yellow"
              id="texTab"
            >
              <v-tab ripple>
                Markdown
              </v-tab>
          <v-tab-item>
            <textarea 
              class="tex"
              v-model="markdown"
            /> 
          </v-tab-item>
          <v-tab ripple>CSS</v-tab>
          <v-tab-item>{{text}}</v-tab-item>
          <v-tab ripple>KeyMaps</v-tab>
          <v-tab-item>{{text}}</v-tab-item>
          <v-btn @click="goAway()">kek</v-btn>
        </v-tabs>  
          </div>
        </div>
      </v-flex>
      <v-flex xs6> 
        <div class="row mt-4">
        <div class="col-md-6">
            <h4 class="light">Preview</h4>
            <Preview class="tex" :markdown=markdown :fullscreen=fullscreen @changeMarkdown="setText" />
        </div>
    </div>  
   
      </v-flex>
    </v-layout>
    <EditorFooter @startPresentation="getIt"/>
  </v-container>
</template>

<script>
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import Vue from 'vue'

import EditorFooter from './EditorFooter'
import Preview from './Preview'

Vue.use(fullscreen)

export default {
  name: "editor",
  components: {
    EditorFooter,
    Preview
  },
  data() {
    return {
      phide: false,
      active: null,
      text: 'Not today',
      markdown: '',
      fullscreen: false,
    };
  },
  methods:{
    setText(txt){
     //  window.alert("okl");
      this.markdown = txt;
    },
    next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
    goAway(){
      this.phide = !this.phide;
    },
    toggle(){
   //   window.alert("happend");
      this.$fullscreen.toggle(this.$el.querySelector('.preview'), {
        wrap: false,
        callback: this.fullscreenChange
      })
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    },
    getIt(){
      //window.alert("ddd");
      this.toggle();
    }
  }
};
</script>


<style scoped>
.container{
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    font-family: 'Roboto', sans-serif;
    height: 950px;
    width: 100%;
}
.light{
    color: white;
    text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.9);
}
.textarea{
  resize: none;
  border: 2px dashed orange;
  outline: none;
}

.tex{
  height: 400px;
  width: 700px;
  background-color: rgba(255, 255, 255, 0.9);
}

.blockquote {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
}
#texTab {
  width: 700px;
}
.tempppp{
  background-color: black;
  width: 10px;
}
</style>
