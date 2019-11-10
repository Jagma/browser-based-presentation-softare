import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/InfoViews/About.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./views/editorViews/Editor.vue')
    },
    {
      path: '/t',
      name: 'temp',
      component: () => import('./temp/temp.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/newEd/main.vue')
    },
    {
      path: '/indicator',
      name: 'indicator',
      component: () => import('./components/typingIndicator.vue')
    }
  ]
})