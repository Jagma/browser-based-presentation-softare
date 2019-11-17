<template>
    <div v-shortkey="{left: ['arrowleft'], right:['arrowright']}" @shortkey="doStep" >
    <div v-shortkey= "['ctrl','d']" @shortkey="duplicateSlide"></div>
    <div v-shortkey= "['ctrl','z']" @shortkey="saveFile"></div>
    </div>
</template>

<script>
//import {Options} from '../main.js'
import slid from    '!raw-loader!../slideshows/firstSlideShow/firstSlidshow.md'
import details from '../slideshows/firstSlideShow/firstSlidshow.json'
import Vue from 'vue'
Vue.use(require('vue-shortkey'))
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css'



Vue.use(fullscreen)
Vue.use(VueKatex)



export default {
    props: {
        firstSlide: {default:1},
        startStep: {default:1},//Step on which the slideshow starts
        lastSlide: {default: null},
        embedded: {default: false},
        inserted: {default: false},
        keyboardNavigation: {default: true},
        mouseNavigation: {default: true},
        onStartExit: {default: () => function(){ if(this.$router) this.$router.push('/') }},
        onEndExit: {default: () => function(){ if(this.$router) this.$router.push('/') }},
        skip: {default: false},
        backBySlide: {default: false},
        repeat: {default: false},
        currentMarkdown: {default: ""},
    },
    data: function() {
        return {
            currentSlideIndex: 1,
            currentSlide: null,
            step: this.startStep, //Step on which the slideshow starts
            slideshowTimer: 0,
            slideTimer: 0,
            slides: [],
            active: true,
            slideShowMarkdown: slid,
            temp: "hello",
            fileDetails: details,
            fileString: "",
        }
    },
    computed: {
        computedActive: function() {
            return this.slides.some(function(slide){return slide.active})
        }
    },
    mounted() {
        //Lists all the slides
        this.isSlideshow = true;
       // var self = this;
   //     this.findSlides();

        if(this.$root.direction === 'prev'){
            this.currentSlideIndex = this.slid
        }
    },
    created(){
        this.slides = this.slideShowMarkdown.split('---');
        this.slides.unshift('');
        /*need to update the nec data values*/
        this.currentSlide =0;
    
        this.$emit("changeSlide", this.slides[this.currentSlide],this.currentSlide);
        
    },
    methods: {
        duplicateSlide(){
            this.slides.splice(this.currentSlide,0,this.slides[this.currentSlide]);
            alert(this.currentSlide)
        },
        saveFile(){
            this.fileString = "ok";
            var i;
            for(i = 1; i<=this.slides.length; i++){
                this.fileString = this.fileString.concat(this.slides[i])
                this.fileString = this.fileString.concat("\n---\n");
            }
            alert(this.fileString)
        },
        getFirstSlide(){
            this.slides[this.currentSlide] = this.currentMarkdown;
            this.$emit("changeSlide", this.slides[this.currentSlide],this.currentSlide);
        },
        nextSlide(i){//This needs to be changed to a slide object but will work for now
            this.slides[this.currentSlide] = this.currentMarkdown;
            this.currentSlide += i;
            if(this.currentSlide > this.slides.length -1){//-1 is to stop empty slide
                this.currentSlide = this.slides.length-1;
            }else if(this.currentSlide < 0){
                this.currentSlide =0;
            }
            this.$emit("changeSlide", this.slides[this.currentSlide],this.currentSlide, this.slides.length);
        },
        doStep(event){
            switch(event.srcKey){
                case 'left':
                    this.nextSlide(-1);
                    break;
                case 'right':
                    this.nextSlide(1);
                    break;
            }
        },
    },

}
</script>

<style>

</style>
