<template>
  <div class="home" id="home">
    <div class="currentSlide">
      <slides v-bind:slideShow="slideShow"></slides>
    </div>
    <button type="button" @click="toggle">Fullscreen</button>
   
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
      }
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
