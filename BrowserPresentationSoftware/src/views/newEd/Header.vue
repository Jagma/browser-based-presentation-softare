<template>
      <header>
          <v-layout row justify-start>
                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" >Menu</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in fileItems" :key="link.option">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-flex>


                <v-flex xs12 md1>
                    <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" >Edit</v-btn>
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
                        <v-btn flat v-on="on" >View</v-btn>
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
                        <v-btn flat v-on="on" >Insert</v-btn>
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
                        <v-btn flat v-on="on" >Slide</v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="link in slideItems" :key="link.option"  @click="menuClick(link)">
                            <v-list-tile-title>{{ link.option }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-flex>
          </v-layout>

      </header>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify);
export default {

    data: () => ({
        fileItems: [
            { option: 'New' },
            { option: 'Open' },
            { option: 'Make a copy' },
            { option: 'Share' },
            { option: 'Rename' },
            { option: 'Print' },
            { option: 'Delete presentation' },
            { option: 'Presentation details' },
        ],
        editItems: [
            { option: 'Cut' },
            { option: 'Copy' },
            { option: 'Paste' },
            { option: 'Delete' },
            { option: 'Select All' },
            { option: 'Find and Replace' },
        ],
        viewItems: [
            { option: 'Present' },
            { option: 'Hide Menu' },
        ],
        insertItems: [
            { option: 'Image' },
            { option: 'Web view' },
            { option: 'Table' },
            { option: 'New slide' },
            { option: 'Slide numbers' },
        ],
        slideItems: [
            { option: 'New slide' },
            { option: 'Duplicate slide' },
            { option: 'Delete slide' },
            { option: 'Skip slide' },
            { option: 'Change transition' },
            { option: 'Change theme' },
        ],
  }),
  methods:{
      menuClick(link){
          window.alert(link.option)
      }
  }
}
</script>

<style>
header{
    background-color: rgb(224, 224, 224);
    justify-content: left;
    justify-items: left;
    justify-self: left;
}
.t{
    padding-right: 53%
}
</style>