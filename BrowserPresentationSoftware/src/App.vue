<template>
  <v-app app light>
  <div id="app">
      
      <v-navigation-drawer v-model="drawer" absolute dark temporary>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <router-link class="toolbar" to="/">Home</router-link> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <router-link to="/editor">Editor</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <router-link to="/about">About</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-navigation-drawer>
      <router-view/>
  </div>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default {
     data () {
      return {
        drawer: null,
      }
    },
    methods:{
      frick(){
        return 1;
      }
    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#nav{
  border: none;
  size: 50%;
}
.toolbar{
  font-size: 400; 
}
html, body {
    overflow: hidden;
}
</style>
