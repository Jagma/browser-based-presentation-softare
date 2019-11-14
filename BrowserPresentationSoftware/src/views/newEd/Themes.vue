<template>
  <div>
      <v-dialog max-width="600px">
          <v-btn flat slot="activator" class="success">Change Theme</v-btn>
          <v-card>
              <v-card-title>
                  <h2>Select a Theme</h2>
              </v-card-title>
          </v-card>
          <v-list>
              <v-list-tile 
                v-for="theme in listOfThemes"
                :key="theme.name" @click="returnTheme(theme)"
                >
                <v-list-tile-content>
                    <v-list-tile-title v-text="theme.name"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        listOfThemes: null,
      }
    },
    methods:{
        async getThemes(){
          let config = {
              async: true,
              crossDomain: true,
              url: "http://localhost:8088/getThemes",
              method: "GET",
              headers: {
                  'Accept': 'application/json',
              }
          }
          const respon = await axios.get('http://localhost:8088/getThemes', config);
          this.listOfThemes = respon.data;
      },
      returnTheme(theme){
          window.alert(theme.name)
      }
    },
    beforeMount(){
        this.getThemes();
    }
}
</script>

<style>

</style>