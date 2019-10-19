<template>
  <div class="editorView">
      <Header/>
      <SideMenu id="sideMenu"/>
      <v-container class="editorContainer">
            <v-layout row wrap align="end" justify="start">
                <v-flex md6>
                    <Preview class="preview" ref="preview" :markdown=markdown  />
                </v-flex>
                <v-flex md6>
                    <Preview class="preview" ref="preview" :markdown=markdown  />
                </v-flex>
                <v-flex md12 >
                    <SlideList id="slideList" ></SlideList>
                </v-flex>
            </v-layout>
      </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify);

import Header from '../newEd/Header'
import Preview from '../editorViews/Preview'
import SideMenu from '../newEd/SideMenu'
import SlideList from '../newEd/SlideList'


export default {
    components: {
        Header,
        Preview,
        SideMenu,
        SlideList
    },

    data() {
        return {
            markdown: '',
        }
    },
    methods: {

    }
}
</script>

<style>
.preview{
    width: 90vh !important;
    height: 70vh !important;
    overflow: hidden;
}
.editorView{
    margin-top:-2%;
    overflow: hidden;
}

.editorContainer{
    margin-top: -45%;
}
#sideMenu{
    visibility: hidden;
}
#slideList{
    
}
</style>