<template>
  <div class="container" ref="preview"  v-shortkey="{up: ['home']}" @shortkey="up">
  <slideshow @change="setMarkdown" ref="ccontrol"/>  
  <div id="overlay" ref="overlay" v-shortkey="{overlay: ['end']}" @shortkey="overlay" >
      <webcam ref="webcam" :soverlay="showOverlay"/>
  </div>
  <div :key="markdown"
            class="tex preview"
            v-markdown
            :fullscreen=fullscreen
            :style="theme"
  >{{markdown}}
  </div>
  <textarea 
              id="secretText"
              class="tex"
              v-model="markdown"
              ref="markdownText"
            /> 
  </div>
</template>

<script>
import slideshow from '../../Models/slideshow';
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import Vue from 'vue';
import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css'
import webcam from '../../plugins/webcam';
import theme1 from '!raw-loader!../../assets/testTheme.css'

Vue.use(fullscreen)
Vue.use(VueKatex)

export default {
    name: "preview",
    components:{
      slideshow,
      webcam,
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
          theme: null,
        };
    },
    methods: {
      toggleTheme(){
        if(this.theme==null) this.theme=theme1;
        else this.theme=null;
      },
        overlay(event){
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
      //this.markdown = this.$refs.ccontrol;
   //   this.markdown = this.slideshow.temp;
    },
    watch: {
      fullscreen :  function () {
        
         // this.changeFullscreen(val);
         // this.setScale();
          this.toggle();
         // console.log("changed full");
          //window.alert('catched');
      },
      markdown: function(){
       // window.alert(this.markdown);
      }
    },
    props: ['markdown','fullscreen', 'options'],
    mounted() {
      this.$nextTick(() => {
          if(this.focusOnTex){
             this.$refs.markdownText.focus();
          }
        }
      );
    },
}
</script>
<style >
@import '../../assets/codeThemes/duotone-sea.css';

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
.preview{
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #5e7c86 75%);
    font-family: 'Roboto', sans-serif;
    height: 90vw!important;
    width: 100vw!important;
   /* margin-top: -2.2%;
    margin-left: -1.3%;
  /*  height: 90vh!important;
    width: 1000vh!important; 
    display: flex;*/
    
}
.list{
  font-size: 40px;
  margin-left: 20%;
}
#secretText {
      margin-top: 100%;
      overflow-inline: inherit;
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
</style>
