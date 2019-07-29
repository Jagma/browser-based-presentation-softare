import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//Custom CSSSSSSSSSSS
import './assets/style.css';

//Custom files
import markdown from '@/directives/markdown';
import slide from './Models/slide.vue';
import slideShow from './Models/slideshow';

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.directive('markdown', markdown);



const Options = {
  plugins: []
}

export {
  slide,
  slideShow,
  Options
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
