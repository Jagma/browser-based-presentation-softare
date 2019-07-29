<template>
  <div>
  <slideshow @change="setMarkdown" ref="ccontrol"/>  
  <div :key="markdown"
            class="tex preview"
            v-markdown
            :fullscreen=fullscreen
  >{{markdown}}
  </div>
  </div>
</template>

<script>
import slideshow from '../../Models/slideshow';
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import Vue from 'vue';

Vue.use(fullscreen)


export default {
    name: "preview",
    components:{
      slideshow
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
        };
    },
    methods: {
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


      setMarkdown(mrk){
       
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
      fullscreen :  function (val) {
          this.changeFullscreen(val);
          this.setScale();
          this.toggle();
          
       //   window.alert('catch');
      }
    },
    props: ['markdown','fullscreen'],
}
</script>

<style scoped>
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

</style>
