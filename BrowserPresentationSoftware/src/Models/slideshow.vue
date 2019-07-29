<template>
    <div v-shortkey="{left: ['arrowleft'], right:['arrowright']}" @shortkey="doStep" >
    </div>
</template>

<script>
//import {Options} from '../main.js'
import slid from '!raw-loader!../slideshows/firstSlideShow/firstSlidshow.md'

import Vue from 'vue'
Vue.use(require('vue-shortkey'))

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
        /*need to update the nec data values*/
        this.$emit("change",this.slides[0]);
        this.currentSlide =0;
    },
    methods: {
        getFirstSlide(){
        this.$emit("change",this.slides[0]);
        },
        nextSlide(i){//This needs to be changed to a slide object but will work for now
            this.currentSlide += i;
            if(this.currentSlide === this.slides.length-1){//-1 is to stop empty slide
                this.currentSlide--;
            }else if(this.currentSlide < 0){
                this.currentSlide =0;
            }
          //  window.alert("chanign the slides");
            this.$emit("change", this.slides[this.currentSlide]);
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
       /* findSlides: function({resetIndex = true} = {}){
            var self = this;
            var i = 0; 
            self.slides = [];
            this.$children.forEach(function(el){
                if(el.isSlide){
                    i++;
                    if (( i>= self.firstSlide) && ((!self.lastSlide) || (i<self.lastSlide))){
                        self.slides.push(el);//Adds slide to the stack
                    }
                }
                else if(el.isSlideshow){
                    el.active = false;
                    el.slides.forEach(function(slide){
                        i++; 
                        slide.active = false;
                        if((i>= self.firstSlide)  &&
                            (!self.lastSlide || (i <= self.lastSlide))) {
                            self.slides.push(slide)
                        }
                    })
                }
            })
            if(resetIndex){
                self.currentSlideIndex = 1;
                self.currentSlide = self.currentSlide === null ? null : self.slides[0];
                self.step = self.startStep;
            }
        },*/
    },
    watch: {
        
    },

}
</script>

<style>

</style>
