<template>
  <div class="editorView" ref="editorView"  v-shortkey= "['home']" @shortkey="goToFirstSlide">
      <div v-shortkey= "['end']" @shortkey="goToLastSlide"></div>
      <div v-shortkey= "['f11']" @shortkey="toggle"></div>
      <div v-shortkey= "['alt','arrowup']" @shortkey="hideHeader"></div>
      <div v-shortkey= "['ctrl','s']" @shortkey="newSlide"></div>
      <Header v-if="this.showHeader" @newProjectCreated="newProjectedCreated" @openFile="openFile" @togglePageNumbers="togglePageNumbers" @newTheme="changeTheme" />
      <SideMenu id="sideMenu"/>
      <SlideController @changeSlide="updateMarkdown" ref="slideController" :currentMarkdown=markdown />
      <v-container class="editorContainer" fill-height >
            <v-layout row wrap align="end" justify="start">
                <v-flex md6>
                   <Toolbar @bold="boldText" @italic="italicText" @strike="strikeText" @newSlide="newSlide" @clearAll="clearText" />
                   <textarea id="mdEditor" v-model="markdown" ref="markdownText"/> 
                  <!--  <img width="200px" height="200px" :src="output"> -->
                </v-flex>
                <v-flex md6 align-center>
                    <Preview :class="previeClass" class="preview" id="preview"
                                ref="preview" 
                                :markdown=markdown 
                                :style="cssVars" 
                                :showPageNumbers=showPageNumbers 
                                :currSlideNumber=currentSlideNumber 
                                :totalPages=totalSlides
                                :themeDirectory=themeDirectory
                    /> 
                </v-flex>
                <v-flex md1 class="temp">
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

//import tempMarkdown from '!raw-loader!../../slideshows/firstSlideShow/firstSlidshow.md'

import Header from '../newEd/Header'
import Preview from '../editorViews/Preview'
import SideMenu from '../newEd/SideMenu'
import SlideList from '../newEd/SlideList'
import Toolbar from '../newEd/Toolbar'
import 'katex/dist/katex.min.css';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'

import SlideController from '../../Models/slideshow'
//import slideShowMarkdownFile from "!raw-loader!../../slideshows/firstSlideShow/firstSlidshow.md"
//import html2canvas from 'html2canvas'
//import VueHtml2Canvas from 'vue-html2canvas';

//Vue.use(VueHtml2Canvas);

import TitlePage from '../../slideshows/firstSlideShow/firstSlidshow.json'


import VueResizeText from 'vue-resize-text'
Vue.use(VueResizeText)

export default {
    components: {
        Header,
        Preview,
        SideMenu,
        SlideList,
        Toolbar,
        SlideController,
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
            showHeader: true,
            titlePage: false,
            showPageNumbers: true,
            currentSlideNumber: 0,
            totalSlides: 0,
            titlePageDetails: TitlePage,
            themeDirectory:"Stellebosch",
        }
    },
    methods: {
        print(){
            alert("PRinting")
            const fileName = "pdfpdf.pdf";
            this.goToFirstSlide();
            this.$refs.slideController.nextSlide(1);
            let canvas = html2canvas(document.querySelector('#preview'),{scale: 2});
            let pdf = new jspdf('l','pt','a4');
            var i =0;
            for(i=0; i<3; i++){
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 150,-180,450,450);
                pdf.addPage()
                this.$refs.slideController.nextSlide(1);
                canvas = html2canvas(document.querySelector('#preview'),{scale: 2});
            }
            pdf.addPage()
            pdf.text(20, 20, 'Do you like that?')
            pdf.save(fileName);
            /*html2canvas(document.querySelector('#preview'),{scale: 2}).then(canvas =>{
                let pdf = new jspdf('l','pt','a4');
                var i =0;
                for(i=0; i<10; i++){
                    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 150,-180,450,450);
                    pdf.addPage()
                    this.$refs.slideController.nextSlide(1);
                    this.$forceUpdate();
                }
                pdf.addPage()
                pdf.text(20, 20, 'Do you like that?')
                pdf.save(fileName);
            });*/
        },
        hideHeader(){
            this.showHeader = !this.showHeader;
        },
        boldText(){
            this.markdown = this.markdown + "**Bold here**";
        },
        italicText(){
            this.markdown = this.markdown + "*italic here*";
        },
        strikeText(){
            this.markdown = this.markdown + "~~strike text~~";
        },
        newSlide(){
            //alert("new slide");
            this.$refs.slideController.insertNewSlide();
            this.$refs.slideController.nextSlide(1);
            this.markdown = ""
        },
        clearText(){
            this.markdown = "";
        },
        changeTheme(themeDirectory){
            this.themeDirectory = themeDirectory
            this.$refs.preview.setTheme();
        },
        goToFirstSlide(){
            this.$refs.slideController.nextSlide(Number.MIN_SAFE_INTEGER);
        },
        goToLastSlide(){
            this.$refs.slideController.nextSlide(Number.MAX_SAFE_INTEGER);
        },
        updateMarkdown(newSlide, slideNumber, totalSlides){
            this.markdown = newSlide;
            if(slideNumber == 0)
                this.titlePage = true;
            else
                this.titlePage = false;
            this.currentSlideNumber = slideNumber+1;
            this.totalSlides = totalSlides;
        },
        openFile(){
            alert("opening...")
        },
        newProjectedCreated(){
            /*const reader = new FileReader();
            const projectfile = () => import('!raw-loader!../../slideshows/'+event+"/"+event+".json");
            const file = "../../slideshows/"+event+"/"+event+".md"
            reader.readAsText(projectfile, "UTF-8");*/
        },
        getFirstSlide(){
            this.markdown =""// tempMarkdown
        },
        toggle(){
            this.fullscreenChange(true);
            //window.alert("catch toggle");
            this.$fullscreen.toggle(this.$el.querySelector('.preview'), {
                wrap: false,
                callback: this.fullscreenChange
            })
        },
        togglePageNumbers(){
            this.showPageNumbers = !this.showPageNumbers;
        },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
            this.screenWidth = window.screen.width;
            this.screenHeight = window.screen.height;
        },
        getScreenShot(){
            //window.alert(this.$el.querySelector('.preview').clientWidth)
            this.print()
            //alert(this.options.pageNumber)
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
                justPrev: !this.fullscreen,
                titlePage: this.titlePage,
            }
        },
    }
}
</script>

<style lang="scss">
/*
@import '../../Themes/Stellenbosch.css';*/

.preview{
    /*width: 90vh !important;
    height: 70vh !important;*/
    /*width: 640px !important;
    height: 360px !important;*/
    width: 650px !important;
    height: 650px !important;
    margin-top: -1vh;
}
/*
@media only screen and (min-width: 1600px) {
  .preview {background: pink;}
}
*/
.editorView{
   /* overflow: hidden;*/
   background-color: rgb(216, 216, 216);
   color: black;
}

.editorContainer{
    margin-top: -45%;
}
#sideMenu{
    visibility: hidden;
}
#slideList{
    margin-top: 5%
}
#mdEditor{
    width: 40vw;
    height: 20vw;
    background-color: whitesmoke;
}
.temp{
    margin-top: 4.12%
}
</style>