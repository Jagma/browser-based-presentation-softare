<template>
  <div class="editorView" ref="editorView">
      <Header/>
      <SideMenu id="sideMenu"/>
      <v-container class="editorContainer">
            <v-layout row wrap align="end" justify="start">
                <v-flex md6>
                   <textarea id="mdEditor" v-model="markdown" ref="markdownText"/> 
                  <!--  <img width="200px" height="200px" :src="output"> -->
                </v-flex>
                <v-flex md6>
                    <Preview :class="previeClass" class="preview" ref="preview" :markdown=markdown :style="cssVars" /> 
                   
                </v-flex>
                <v-flex md1>
                    <v-btn @click="toggle">++</v-btn>
                     <v-btn @click="getScreenShot">check</v-btn>
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
import 'katex/dist/katex.min.css';

//import slideShowMarkdownFile from "!raw-loader!../../slideshows/firstSlideShow/firstSlidshow.md"
//import html2canvas from 'html2canvas'
//import VueHtml2Canvas from 'vue-html2canvas';

//Vue.use(VueHtml2Canvas);

import VueResizeText from 'vue-resize-text'
Vue.use(VueResizeText)

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
            output: null,
            color: true,
            screenWidth: null,
            screenHeight: null,
        }
    },
    methods: {
        getFirstSlide(){
            this.markdown = ""
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
            this.screenWidth = window.screen.width;
            this.screenHeight = window.screen.height;
        },
        getScreenShot(){
            //window.alert(this.$el.querySelector('.preview').clientWidth)
            this.color = !this.color;
            window.alert(this.screenWidth + ":"+this.screenHeight)
            /*
            const el = this.$refs.preview;
            const options = {
                type : 'dataURL'
            }
              
            this.output = await this.$html2canvas(el, options);
            saveAs(this.output, 'test.jpg')
            window.alert("Done")*/
        }

    },
    //Before mount happens when page is loaded
    beforeMount(){
        this.getFirstSlide();
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
    },
    computed: {
        cssVars() {return {
            '--full-height': JSON.stringify(this.screenHeight)+"px",
            '--full-width': JSON.stringify(this.screenWidth)+"px",
            '--bg-color': "red",
            }
        },
        previeClass: function() {
            return {
                fullscreen: this.fullscreen,
                justPrev: !this.fullscreen
            }
        },
    }
}
</script>

<style lang="scss">

@import '../../Themes/Stellenbosch.css';

.preview{
    /*width: 90vh !important;
    height: 70vh !important;*/
    width: 512px !important;
    height: 288px ;

}
/*
@media only screen and (min-width: 1600px) {
  .preview {background: pink;}
}
*/
.editorView{
   /* overflow: hidden;*/
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