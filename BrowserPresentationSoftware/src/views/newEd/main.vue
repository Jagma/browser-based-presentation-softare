<template>
  <div class="editorView">
      <Header/>
      <SideMenu id="sideMenu"/>
      <v-container class="editorContainer">
            <v-layout row wrap align="end" justify="start">
                <v-flex md6>
                   <textarea id="mdEditor" v-model="markdown" ref="markdownText"/> 
                </v-flex>
                <v-flex md6>
                    <Preview class="preview" ref="preview" :markdown=markdown  />
                </v-flex>
                <v-flex md1>
                    <v-btn @click="toggle">++</v-btn>
                </v-flex>
                <v-flex md10 v-if="this.showSlideList">
                    <SlideList id="slideList" ></SlideList>
                </v-flex>
            </v-layout>
      </v-container>
     
  </div>
</template>

<script>

import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify);

import fullscreen from 'vue-fullscreen' //to make app fullscreen

Vue.use(require('vue-shortkey'))
Vue.use(fullscreen)


import Header from '../newEd/Header'
import Preview from '../editorViews/Preview'
import SideMenu from '../newEd/SideMenu'
import SlideList from '../newEd/SlideList'

import slideShowMarkdownFile from "!raw-loader!../../slideshows/firstSlideShow/firstSlidshow.md"


export default {
    components: {
        Header,
        Preview,
        SideMenu,
        SlideList
    },
    data() {
        return {
            markdown: "",
            showSlideList: true,
            fullscreen: false,
        }
    },
    methods: {
        getFirstSlide(){
            this.markdown = "#kek"
        },
        toggle(){
            this.fullscreenChange(true);
            //window.alert("catch toggle");
            this.$fullscreen.toggle(this.$el.querySelector('.preview'), {
                wrap: false,
                callback: this.fullscreenChange
            })
        },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
        },

    },
    //Before mount happens when page is loaded
    beforeMount(){
        this.getFirstSlide()
    },
}
</script>

<style>
.preview{
    width: 90vh !important;
    height: 70vh !important;
    overflow: hidden;
    background-color: green;
}


.editorView{
    overflow: hidden;
}

.editorContainer{
    margin-top: -45%;
}
#sideMenu{
    visibility: hidden;
}
#slideList{
    
}
#mdEditor{
    width: 100%;
    height: 100%;
    background-color: beige;
}
</style>