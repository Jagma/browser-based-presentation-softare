<template>
    <div class="slide">
        <h1>{{currentSlide.header}}</h1>
        <img v-bind:src="currentSlide.url"><img/>
        <footer>{{currentSlide.id}}</footer>
    </div>
</template>

<script>
//../../assets/food.jpg
// <img src="../assets/logo.png" style="width:500px;height:600px;">
export default {
    name: "slide",
    props: ["currentSlide"] //Props is getting opjects
}
</script>
<style scoped>
.slide{
   background-color: rgba(51,51,51,0.7);
}
</style>
