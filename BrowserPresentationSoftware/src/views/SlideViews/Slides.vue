<template>
    <div class="slide"
         v-shortkey="{up: ['arrowup'], down: ['arrowdown'], left: ['arrowleft'], right:['arrowright']}" @shortkey="theAction">
        <slide key="1" v-bind:currentSlide="currentSlide"></slide>
    </div>
</template>

<script>
import Vue from 'vue'
import slide from "./Slide.vue"
Vue.use(require('vue-shortkey'))

//../../assets/food.jpg <slide v-bind:currentSlide="currentSlide"></slide>
// <img src="../assets/logo.png" style="width:500px;height:600px;">
export default {
    name: "slides",
    components:{
        slide,
    },
    props: ["slideShow"], //Props is getting opjects
    data(){ return{
        slideNumber: 0,
        currentSlide: 
            {
                id: this.slideShow[0].id,
                url: this.slideShow[0].url,
                header: this.slideShow[0].header,
                endSlide: this.slideShow.length-1,
            }
    }},
    methods:{
        updateCurrentSlide(amount){
            this.slideNumber = this.slideNumber + amount;
            if(this.slideNumber>this.slideShow.length-1)
                this.slideNumber = this.slideShow.length-1;
            if(this.slideNumber<0)
                 this.slideNumber = 0;
            this.currentSlide.id= this.slideShow[this.slideNumber].id;
            this.currentSlide.url= this.slideShow[this.slideNumber].url;
            this.currentSlide.header= this.slideShow[this.slideNumber].header;
        },
         theAction(event){
             switch(event.srcKey){
                 case 'left':
                    this.updateCurrentSlide(-1);
                    break;
                case 'right':
                    this.updateCurrentSlide(1);
                    break;
                case 'down':
                    this.updateCurrentSlide(-2);
                    break;
                case 'up':
                    this.updateCurrentSlide(2);
                    break;
             }
           //console.log(event.srcKey);
           // this.leave($$el(cSlide));
        },
    }
}
</script>
<style scoped>
.slide{
    background-color: rgba(51,51,51,0.7);
}
</style>
