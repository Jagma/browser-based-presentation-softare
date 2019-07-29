<template>
  <div class="home" id="home">
    <v-btn outline color="indigo" type="button" class="btnfull" @click="toggle">Fullscreen</v-btn>
    <div class="currentSlide">
      <slides v-bind:slideShow="slideShow"></slides>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import Vue from 'vue'
import slides from '../views/SlideViews/Slides'
import slid from '!raw-loader!../slideshows/firstSlideShow/firstSlidshow.md'
/*
<ul>
      <-- li v-for="item in arr" :key="item"><textarea style="width= 600px; height= 200px" > {{item}}</textarea> </li>
    </ul> 
*/
Vue.use(fullscreen)

export default {
  name: 'home',
  components: {
    slides,
  },
  data: function(){return {
    fullscreen: false,
    datad: slid,
    arr: [],
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
      {
        id:4,
        url: "http://www.strawpoll.me/embed_1/17921572",
        header: "",
      },
      {
        id:5,
        url: "https://write-box.appspot.com/",
        header: "",
      },
      {
        id:6,
        url: "http://webserver-itrw324.herokuapp.com/",
        header: "",
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
    },
  },
  created() {
      this.arr= this.datad.split('---');
      
  },
}
</script>
<style scoped>
.currentSlide{
    position: fixed;
    width: 100%;
    height: 100%;
    background: whitesmoke;
    z-index: 10;
    transform: scale(.5);
}
.btnfull .currentSlide::content{
  position: relative;
  bottom: 5%;
  right: 10%;
}
#ff{
  margin-top: 20%;
}
</style>