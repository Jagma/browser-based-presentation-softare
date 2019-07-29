<template>
    <div></div>
</template>

<script>
//import {Options} from '../main.js'
import slid from '!raw-loader!../slideshows/firstSlideShow/firstSlidshow.md'

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
        this.$emit("change",this.slides[0]);
    },
    methods: {
        getFirstSlide(){
        this.$emit("change",this.slides[0]);
        }
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
