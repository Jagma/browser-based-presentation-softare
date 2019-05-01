<template>
  <div class="about">
    <h1>Still need a name so this will change</h1>
    <p>For support contact: </p>
    <p v-shortkey="{up: ['arrowup'], down: ['arrowdown']}" @shortkey="theAction()">What?????????</p>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.use(require('vue-shortkey'))
export default {
  methods:{
    theAction(event){
      window.alert("keys work")
    }
  }
}
</script>


<style scoped>

</style>

