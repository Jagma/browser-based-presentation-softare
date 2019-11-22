<template>
  <div class="container" ref="preview">
    <head>
<meta charset="utf-8"/>
<link rel="stylesheet" type="text/css" href="./katex/katex.min.css">
</head>
    <!--<katex-element expression="'\\frac{a_i}{1+x}'"/>-->
    <div v-shortkey="{up: ['insert']}" @shortkey="liveEdit"></div>
    <TitlePage v-if="currSlideNumber == 1" :projectJSON=jsonobj />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css" integrity="sha384-exe4Ak6B0EoJI0ogGxjJ8rn+RN3ftPnEQrGwX59KTCl5ybGzvHGKjhPKk/KC3abb" crossorigin="anonymous">
  <!--  <slideshow @change="setMarkdown" ref="ccontrol"/>  -->
    <div id="overlay" ref="overlay" v-shortkey="{overlay: ['scrolllock'], overlay: ['numlock']}" @shortkey="overlay" >
        <webcam ref="webcam" :soverlay="showOverlay"/>
    </div>
    <!--<p v-html="temp"></p>-->
    <div :key="markdown"
              class="preview"
              v-markdown
              :fullscreen=fullscreen
              :style="theme"
    >{{markdown}}
    </div>
    <h6 :class="pagenumberClasses" >{{currSlideNumber}}/{{totalPages}}</h6>
    <textarea 
              id="secretText"
              class="tex"
              v-model="markdown"
              ref="secretText"
            />
  </div>
</template>

<script>

//import slideshow from '../../Models/slideshow';
import fullscreen from 'vue-fullscreen' ;//to make app fullscreen
import Vue from 'vue';
import VueKatex from 'vue-katex';
//import 'katex/dist/katex.min.css';
import webcam from '../../plugins/webcam';
import axios from 'axios';

Vue.use(fullscreen)
Vue.use(VueKatex)

import VueResizeText from 'vue-resize-text';
 
Vue.use(VueResizeText)

import TitlePage from '../newEd/TitlePage'
import tempJSON from '../../slideshows/firstSlideShow/firstSlidshow.json'
export default {
    name: "preview",
    components:{
      webcam,
      TitlePage,
    },
    data(){
        return {
          availableHeight : screen.height,
          availableWidth : screen.width,
          contentHeight : 0,
          contentWidth : 0,
          scale: 1,
          mrkdwn: '',
          full: false,
          focusOnTex: false,
          showOverlay:false,
          test: false,
          jsonobj: tempJSON,
          theme: "Stellenbosch",
          temp: "",
        };
    },
    methods: {
      async mathDirect(){
          var str = this.markdown;
          var result = str.match(/\$\$([^*]+)\$\$/g).map(function(val){
            return val.replace(/[$]/g,'');
          });
         if(str.match(/\$\$([^*]+)\$\$/g)){
            await this.getMath(`${result}`);
            this.markdown = await this.markdown.replace(/\$\$([^*]+)\$\$/g, this.temp);
         } 
      },
      async getMath(result){
          let params = {
            "expression": result
          }
          let config = {
              async: true,
              crossDomain: true,
              url: "http://localhost:8088/math",
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
              processData: false,
          }
          
          const respon = await axios.post('http://localhost:8088/math',params, config);
          this.temp = respon.data;
          this.$forceUpdate();
      },
      liveEdit(){
            this.$refs.secretText.focus();
        },
      toggleTheme(){
       // if(this.theme==null) this.theme=theme1;
       // else this.theme=null;
      },
        overlay(/*event*/){
          this.showOverlay = !this.showOverlay;
          this.$refs.webcam.toggleWebcam();
          //window.alert(this.overlay);
        },
         up(){
          this.focusOnTex = !this.focusOnTex;
          if(this.focusOnTex){
            this.$refs.markdownText.focus();
          } else{
            this.$refs.preview.focus();
            this.$refs.markdownText.blur();
        //    window.alert("dfdff");
          }    
      },
      toggle(){
      /*window.alert(this.fullscreen);
      this.$fullscreen.toggle(this.$el.querySelector('.preview'), {
        wrap: false,
        callback: this.fullscreenChange
      })*/
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    },
      setMarkdown(mrk){
        //window.alert(mrk);
        this.mrkdwn = mrk
        this.$emit("changeMarkdown", mrk);
      },
      async setTheme(){
          if ('Stellenbosch' === this.themeDirectory)
            this.theme = await import('../../Themes/Stellenbosch.css');
          else if (this.themeDirectory === 'DarkTheme')
            this.theme = await import('../../Themes/DarkTheme.css');
      },
      getContentHeight(){
        return this.$refs.infoBox.clientHeight;
      },
      setContentHeight(height){
        this.contentHeight = height;
      },
      getContentWidth(){
        return this.$refs.infoBox.clientWidth;
      },
      setContentWidth(width){
        this.contentWidth = width;
      },
      setScale() {
        this.scale = Math.min( 
              this.availableWidth / this.contentWidth, 
              this.availableHeight / this.contentHeight );
          if(this.fullscreen)
            this.scale = 1;
       // this.scale = 500;
      },
      changeFullscreen(full){
        if(full===true){
          this.setContentHeight(this.availableHeight);
          this.setContentWidth(this.availableWidth);
          this.setScale();
        }
        else{
          this.setContentHeight(400);
          this.setContentWidth(700);
          this.setScale();
        }
      //  this.setScale();
      },
    },
    created(){
      this.setContentHeight(400);
      this.setContentWidth(700);
      this.theme = import('../../Themes/Stellenbosch.css');
      //this.markdown = this.$refs.ccontrol;
   //   this.markdown = this.slideshow.temp;
    },
    watch: {
      fullscreen :  function () {
          this.toggle();
      },
      markdown: function(){
        this.$nextTick().then(()=>{
            this.mathDirect();
        });
      },
    },
    computed: {
      pagenumberClasses() {return {
          pageNumber: this.showPageNumbers,
          hideStuff: !this.showPageNumbers,
        }
      }
    },
    props: ['markdown','fullscreen', 'options', 'currSlideNumber', 'totalPages','showPageNumbers', 'themeDirectory'],
    mounted() {
      this.mathDirect();
    },
}
</script>
<style >
@import "../../../node_modules/katex/dist/katex.min.css";

@import '../../assets/codeThemes/duotone-sea.css';
/*@import '../../Themes/Stellenbosch.css';*/

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
blockquote{
  font-size: 1.4em;
  width:60%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #78C0A8 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#78C0A8;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

blockquote::after{
  content: '';
}

blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}

.list{
  font-size: 40px;
  margin-left: 20%;
}
#secretText {
    opacity: 0.0;
}
#overlay {
  position: fixed; /* Sit on top of the page content */ /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 50%; 
  left: 37%;
  right: 0;
  bottom: 0;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}

.hideStuff{
  visibility: hidden;
}
</style>
