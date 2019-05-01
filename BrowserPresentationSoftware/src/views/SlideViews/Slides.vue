<template>
    <div class="slide"  v-shortkey="{up: ['arrowup'], down: ['arrowdown']}" @shortkey="theAction()">
        <slide v-bind:currentSlide="currentSlide"></slide>
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
            }
    }},
    methods:{
        updateCurrentSlide(amount){
            this.slideNumber = this.slideNumber + amount;
            this.currentSlide.id= this.slideShow[this.slideNumber].id;
            this.currentSlide.url= this.slideShow[this.slideNumber].url;
            this.currentSlide.header= this.slideShow[this.slideNumber].header;
        },
         theAction(event){
            this.updateCurrentSlide(1);
        }
    }
}
</script>
<style scoped>
.slide{
    background-color: antiquewhite;
    fill: antiquewhite;
}
</style>
