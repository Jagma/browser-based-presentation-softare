<template>
  <div>
      <v-dialog max-width="600px" v-model="dialog">
          <v-btn slot="activator" class="success">New Slide Show</v-btn>
          <v-card class="mx-auto">
              <v-card-title>
                  <h2>New Slide Show</h2>
              </v-card-title>
              <v-card-text>
              <v-form class="px-3" ref="newProjForm">
                    <v-subheader>Required</v-subheader> 
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>  
                    <v-subheader>Optional</v-subheader>  
                    <v-text-field label="Sub Title" v-model="subTitle" prepend-icon="folder"></v-text-field>  
                    <v-text-field label="Author" v-model="author" prepend-icon="face"></v-text-field>           
                    <v-text-field label="Audience" v-model="audience" prepend-icon="supervisor_account"></v-text-field>  
                    <v-text-field label="Organization" v-model="organization" prepend-icon="work"></v-text-field>
                    <v-text-field label="Location" v-model="location" prepend-icon="explore"></v-text-field> 
                    
                    <v-text-field label="Date" v-model="date" prepend-icon="today"></v-text-field>  
                    <v-list flat max-height="20px" id="newProjectThemeSelection" >
                        <v-subheader>Theme</v-subheader>
                        <v-list-tile 
                                v-for="theme in listOfThemes"
                                :key="theme.name" @click="returnTheme(theme)"
                                color="primary"
                                >
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="theme.name"></v-list-tile-title>
                                </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    
                    <v-btn flat class="success mx-0 mt-3" @click="submit">Start Project</v-btn>
              </v-form>
          </v-card-text>
          </v-card>
      </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        title: '',
        subTitle: '',
        author:'',
        audience:'',
        organization:'',
        location: '',
        date:'',
        formContent: '',
        listOfThemes: null,
        theme: '',
        themeDirectory: '',
        inputRules: [
            v => v.length >= 1 || 'Title is required'
        ],
        dialog: false,
        tempSwitch: false,
      }
    },
    methods:{
        async submit(){
            if (this.$refs.newProjForm.validate()){
                let project = {
                    "title": this.title,
                    "subTitle": this.subTitle,
                    "author": this.author,
                    "audience": this.audience,
                    "organization": this.organization,
                    "location":this.location,
                    "date":this.date,
                    "theme": this.theme,
                    "themeDirectory": this.themeDirectory,
                };
                let config = {
                async: true,
                crossDomain: true,
                url: "http://localhost:8088/newProject",
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                }
                }
                try{
                    const respon = await axios.post('http://localhost:8088/newProject',project,config);
                    if(respon.status == 200){this.tempSwitch = !this.tempSwitch}
                    this.$emit('projectCreated',this.title)
                    this.dialog = false;
                }catch(e){
                    this.$emit("projectExists");
                }  
            }
                      
        },
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
          this.theme =  theme.name;
          this.themeDirectory = theme.directory;
          //window.alert(theme.name)
      }
    },
    beforeMount(){
        this.getThemes();
    }
}
</script>

<style>
#newProjectThemeSelection{
    overflow-y: auto;
}


</style>