<template>
<v-footer
      absolute
      class="font-weight-medium footer"
>
    <v-flex
        text-xs-center
        xs12
    >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-flex>
    <v-flex>
        <v-btn @click="toggle">Fullscreen</v-btn>
    </v-flex>
</v-footer>   
</template>
<script>
import fullscreen from 'vue-fullscreen' //to make app fullscreen
import Vue from 'vue'

Vue.use(fullscreen)

export default {
    name: "editorFooter",
    data() {
        return {
            fullscreen: false,
    };
  },
  methods:{
    toggle(){
     //   window.alert("happend");
        this.$emit('startPresentation');
       /* this.$fullscreen.toggle(this.$el.querySelector('.preview'), {
        wrap: false,
        callback: this.fullscreenChange
      })*/
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }
  }
}
</script>


<style>
.footer{
  margin-bottom: 10px;
}
</style>
