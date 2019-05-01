<template>
    <div>
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
    background-color: antiquewhite;
    fill: antiquewhite;
}
</style>
