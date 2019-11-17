<template>
  <v-dialog max-width="600px">
          <v-btn flat slot="activator" class="success">Open Slide Show</v-btn>
          <v-card>
              <v-card-title>
                  <h2>Open Project</h2>
              </v-card-title>
          </v-card>
          <v-list>
              <v-list-tile 
                v-for="project in listOfProjects"
                :key="project.name" @click="returnProject(project)"
                >
                <v-list-tile-content>
                    <v-list-tile-title v-text="project.name"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        listOfProjects: null,
      }
    },
    methods:{
        async getProjects(){
          let config = {
              async: true,
              crossDomain: true,
              url: "http://localhost:8088/getProjects",
              method: "GET",
              headers: {
                  'Accept': 'application/json',
              }
          }
          const respon = await axios.get('http://localhost:8088/getProjects', config);
          this.listOfProjects = respon.data;
      },
      returnProject(Project){
          window.alert(Project.name)
      }
    },
    beforeMount(){
        this.getProjects();
    }
}
</script>

<style>

</style>