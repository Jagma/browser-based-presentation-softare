<template>
  <div>  
  <div :key="markdown"
            class="tex preview"
            v-markdown
  >{{markdown}}
  </div>
  </div>
</template>

<script>
export default {
    name: "preview",
    data(){
        return {
          availableHeight : screen.height,
          availableWidth : screen.width,
          contentHeight : 0,
          contentWidth : 0,
          scale: 1,
        };
    },
    methods: {
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
    },
    watch: {
      fullscreen :  function (val) {
          this.changeFullscreen(val);
          this.setScale();
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
