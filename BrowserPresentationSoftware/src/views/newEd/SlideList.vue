<template>
  <div>
        <v-layout row wrap>
            <v-btn @click="updateS">+</v-btn>
            <v-btn v-for="slide in slides" :key="slide">{{slides.indexOf(slide)+1}}</v-btn>
        </v-layout>
  </div>
</template>

<script>
//import slideShowMarkdownFile from "!raw-loader!../../slideshows/firstSlideShow/firstSlidshow.md"

/**
 * This shows the markdown as text and the amount of slides
 *  <p>MES:{{getSlides}}</p>
        <v-btn @click="updateS">Update</v-btn>
        <p>Amount of Slides: {{slides.length}}</p>
 */

export default {
    data: function() {
        return {
            slides: [],
            temp: "tt -- pp",
           // slideShowMarkdown: slideShowMarkdownFile
        }
    },
    computed:{
        getSlides: function(){
            if (this.slides.length == 0)
                this.splitSlides();
            return this.slides;
        }
    },
    methods:{
        splitSlides() {
          //  this.slides = this.slideShowMarkdown.split('---')
        },
        /*getSlides()  {
            if (this.slides.length == 0){
                this.splitSlides();
            }
            return this.slides;
        },*/
        updateS() {
            this.splitSlides()
        }
    }
}
</script>

<style>

</style>