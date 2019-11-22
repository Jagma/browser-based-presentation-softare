<template>
      <header>
          <div v-shortkey= "['alt','f']" @shortkey="openMenu"></div>
          <div v-shortkey= "['alt','e']" @shortkey="openEditMenu"></div>
          <div v-shortkey= "['alt','b']" @shortkey="openViewMenu"></div>
          <div v-shortkey= "['alt','i']" @shortkey="openInsertMenu"></div>
          <div v-shortkey= "['alt','t']" @shortkey="openSlideMenu"></div>
          <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Project Created</span>
            <v-btn flat color="white" @click="closeSnackbar">Close</v-btn>
          </v-snackbar>
          <v-snackbar v-model="projectExistsSnackbar" :timeout="2500" top color="error">
            <span>Project Already Exists</span>
          </v-snackbar>
          <v-layout row justify-start>
                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" ref="menuButton" >Menu</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in fileItems" :key="link.option"  @click="menuClick(link)">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    <NewProject @projectCreated="newProjectCreated($event)" @projectExists="projectAlreadyExistsError"/>
                    <OpenProject />
                </v-menu>
                </v-flex>
                

                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" ref="editMenuButton">Edit</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in editItems" :key="link.option"  @click="menuClick(link)">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-flex>


                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" ref="viewMenuButton">View</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in viewItems" :key="link.option"  @click="menuClick(link)">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-flex>


                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" ref="insertMenuButton">Insert</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in insertItems" :key="link.option"  @click="menuClick(link)">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-flex>

                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" ref="slideMenuButton">Slide</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in slideItems" :key="link.option"  @click="menuClick(link)">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile>
                            <Themes @newTheme="changeTheme" /> 
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-flex>
          </v-layout>

      </header>
</template>

<script>
import NewProject from './NewProject'
import OpenProject from './OpenProject'
import Themes from './Themes'
import Vue from 'vue'

Vue.use(require('vue-shortkey'))


//import html2canvas from 'html2canvas'

export default {
    components:{
        Themes,
        NewProject,
        OpenProject
    },
    data: () => ({
        fileItems: [
            { option: 'New' },
            { option: 'Open' },
            { option: 'Make a copy' },
            { option: 'Rename' },
            { option: 'Print' },
            { option: 'Presentation details' },
        ],
        editItems: [
            { option: 'Select All' },
        ],
        viewItems: [
            { option: 'Present' },
            { option: 'Hide Menu' },
        ],
        insertItems: [
            { option: 'Image' },
            { option: 'Web view' },
            { option: 'New slide' },
            { option: 'Toggle Page Numbers' },
        ],
        slideItems: [
            { option: 'New slide' },
            { option: 'Duplicate slide' },
            { option: 'Skip slide' },
        ],
        info: "1",
        snackbar:false,
        projectExistsSnackbar:false,
  }),
  methods:{
      changeTheme(themelocation){
            this.$emit("newTheme", themelocation)
      },
      openMenu(){
            this.$refs.menuButton.$el.click();
      },
      openEditMenu(){
            this.$refs.editMenuButton.$el.click();
      },
      openViewMenu(){
            this.$refs.viewMenuButton.$el.click();
      },
      openInsertMenu(){
            this.$refs.insertMenuButton.$el.click();
      },
      openSlideMenu(){
            this.$refs.slideMenuButton.$el.click();
      },
      projectAlreadyExistsError(){
          this.projectExistsSnackbar = true;
      },
      newProjectCreated(event){
          this.snackbar = true;
          this.$emit('newProjectCreated', event)
      },
      closeSnackbar(){
          this.snackbar = false;
          this.projectExistsSnackbar = false;
      },
      menuClick(link){
            switch(link.option){
                case "Open":
                    this.openFile();
                    break;
                case "Copy":
                    this.copySelection();
                    break;
                case 'Toggle Page Numbers':
                    this.togglePageNumbers();
                    break;
                case "Change Theme":
                    this.changeTheme();
                    break;
                case "New slide":
                    this.newSlide();
                    break;
                case "Skip slide":
                    this.skipSlide();
                    break;
                case "Duplicate slide":
                    this.duplicateSlide();
                    break;
                default:
                    window.alert(link.option)
          }
      },
      togglePageNumbers(){
          this.$emit("togglePageNumbers")
      },
      openFile(){
          this.$emit("openFile");
      },
      copySelection(){
        try{
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccesful';
            alert("Copied: "+ msg);
        }catch (err){
            alert('Oops, unable to copy');
        }
      },
      getScreenshot(){
      },
      skipSlide(){
          this.$emit("nextSlide");
      },
      duplicateSlide(){
          this.$emit("duplicate");
      },
      newSlide(){
          this.$emit("newSlide");
      }
  },
}
</script>

<style>
header{
    background-color: rgb(224, 224, 224);
    justify-content: left;
    justify-items: left;
    justify-self: left;
    z-index: 10000;
}
.t{
    padding-right: 53%
}
</style>