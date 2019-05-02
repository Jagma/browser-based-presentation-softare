<template>
    <div class="slide">
        <div v-if="this.currentSlide.id==4">
            <iframe class="fram" :src=currentSlide.url>Loading Poll</iframe>
        </div>
        <div class="fram" v-else>
            <h1>{{currentSlide.header}}</h1>
            <img v-bind:src="currentSlide.url"><img/>
            <footer>{{currentSlide.id}}</footer>
        </div>
    </div>
</template>

<script>
//../../assets/food.jpg
// <img src="../assets/logo.png" style="width:500px;height:600px;">
export default {
    name: "slide",
    props: ["currentSlide"], //Props is getting opjects
    methods:{
        isNull(){
            if(this.currentSlide.header===""){
                window.alert("what");
                return true;
            }
            else{
                window.alert("it's false");
                return false;
            }
        }
    }
}
</script>
<style scoped>
.slide{
   background-color: rgba(51,51,51,0.7);
}
.fram{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
