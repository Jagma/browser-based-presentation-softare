<template>
    <div class="row mt-4">
        <div class="col-md-6">
            <h4 class="light">Preview</h4>
            <div :key="markdown"
                class="tex preview"
                v-markdown
                :style="styling"
                >{{markdown}}
            </div>
            <h1>{{availableHeight}} x {{availableWidth}} : {{contentHeight}} x {{contentWidth}}</h1>
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
    computed: {
      styling: function(){
        return {
           transform: `scale(`+this.scale+`)`,
           'font-size': `270%`,
        }
      }
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
       // this.scale = 500;
      },
      changeFullscreen(full){
        if(full===true){
          this.setContentHeight(this.availableHeight);
          this.setContentWidth(this.availableWidth);
          this.setScale(2.7);
        }
        else{
          this.setContentHeight(400);
          this.setContentWidth(700);
          this.setScale(1);
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
