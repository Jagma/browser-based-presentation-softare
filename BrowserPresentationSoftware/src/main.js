import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//Custom CSSSSSSSSSSS
import './assets/style.css';
import 'katex/dist/katex.min.css';
import '../node_modules/vue-code-highlight/themes/duotone-sea.css';
//Custom files
import markdown from '@/directives/markdown';
import slide from './Models/slide.vue';
import slideShow from './Models/slideshow';

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight) //registers the v-highlight directive



Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.directive('markdown', markdown);
Vue.config.ignoredElements = ['menuitem']


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
