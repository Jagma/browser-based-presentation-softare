<template>
  <div class="home" id="home">
    <v-btn outline color="indigo" type="button" class="btnfull" @click="toggle">Fullscreen</v-btn>
<div v-katex:display="'\\textcolor{#228B22}{F=ma}'" class="math"></div>
<div v-katex="'\\frac{a_i}{1+x}'"></div>
   <textarea v-model="formula" cols="30" rows="10"></textarea>
    <div v-highlight >
    <pre class="language-javascript">
  <code>
    <button>export default {
  name: 'home',
  components: {
    slides,
  },</button>

  </code>
</pre>
    </div>
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
import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css'

/*
<ul>
      <-- li v-for="item in arr" :key="item"><textarea style="width= 600px; height= 200px" > {{item}}</textarea> </li>
    </ul> 
        <video id="video" width="400" height="300" autoplay></video>

*/
Vue.use(fullscreen)
Vue.use(VueKatex)


export default {
  name: 'home',
  components: {
    slides,
  },
  data: function(){return {
    fullscreen: false,
    datad: slid,
    photo: null,
    arr: [],
    formula:  '<button>dfgtest</button> $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
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
      take_photo () {
            this.photo = this.$refs.webcam.getPhoto();
        },
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
  mounted() {
    /*var video = document.getElementById('video');
  //  venderUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
      video:true,
      audio:false
    }, function(stream){
      video.srcObject  = (stream);
      video.play();
    }, function(){
      //
    });*/
  },
}
</script>
<style>
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
  margin-top:90%;
}
.math{
  font-size: 60px;
}

 body {
        background-color: #F0F0F0;
    }
    #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #video {
        background-color: #000000;
    }
    #canvas {
        display: none;
    }
    li {
        display: inline;
        padding: 5px;
    }
</style>