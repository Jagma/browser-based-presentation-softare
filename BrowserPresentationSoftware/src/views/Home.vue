<template>
  <div class="home" id="home">
    <button type="button" @click="toggle">Fullscreen</button>
    <span class="currentSlide">
      <slides v-bind:slideShow="slideShow"></slides>
    </span>    
  </div>
</template>

<script>
// @ is an alias to /src
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import Vue from 'vue'
import slides from '../views/SlideViews/Slides'

Vue.use(fullscreen)

export default {
  name: 'home',
  components: {
    slides,
  },
  data: function(){return {
    fullscreen: false,
    slideShow: [
      {
        id:0,
        url:"https://www.indiewire.com/wp-content/uploads/2018/12/TONT-STARK-AVENGERS-ENDGAME-1.jpg?w=780",
        header: "Ironman Dying"
      },
      {
        id:1,
        url:"https://i.ytimg.com/vi/USAhS3TMi8w/maxresdefault.jpg",
        header: "Batmetal"
      },
      {
        id:2,
        url:"https://i.ytimg.com/vi/SwZDq49VxRs/maxresdefault.jpg",
        header: "fobalicious"
      },
      {
        id:3,
        url:"https://media.giphy.com/media/XdfVLlRbc1ECk/giphy.gif",
        header: "Tim"
      },
      
    ]
  }},
  methods:{
    toggle(){
   //   window.alert("happend");
      this.$fullscreen.toggle(this.$el.querySelector('.currentSlide'), {
        wrap: false,
        callback: this.fullscreenChange
      })
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }
  }
}
</script>
<style scoped>
.currentSlide{
    transform: scale(0.5);
    display:grid;
}
</style>