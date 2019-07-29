import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './assets/style.css';
import markdown from '@/directives/markdown';

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.directive('markdown', markdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
