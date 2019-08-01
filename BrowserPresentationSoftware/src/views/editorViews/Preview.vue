<template>
  <div  v-shortkey="{up: ['arrowup']}" @shortkey="up">
  <slideshow @change="setMarkdown" ref="ccontrol"/>  
  <div id="overlay" ref="overlay" v-shortkey="{overlay: ['end']}" @shortkey="overlay" >
      <webcam ref="webcam" :soverlay="showOverlay"/>
  </div>
  <div :key="markdown"
            class="tex preview"
            v-markdown
            :fullscreen=fullscreen
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
        };
    },
    methods: {
        overlay(event){
          this.showOverlay = !this.showOverlay;
          this.$refs.webcam.toggleWebcam();
          //window.alert(this.overlay);
        },
         up(event){
            switch(event.srcKey){
                  case 'up':
                      this.focusOnTex = !this.focusOnTex;
                      if(this.focusOnTex){
                        this.$refs.markdownText.focus();
                      } else{
                        this.$refs.markdownText.blur();
                    //    window.alert("dfdff");
                      }
                      break;
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
<style>
@import '../../assets/codeThemes/duotone-sea.css';
/*
@import '../../assets/tempt/copy-tex.min.css';
*/

.container{
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    font-family: 'Roboto', sans-serif;
    height: 100%;
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
  background-color: rgba(255, 255, 255, 0.9);
  /*transform: scale(2.7);*/
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
