<template>
  <div>
      <header>
          <v-layout row justify-center id="toolbar">
                <v-flex xs12 md2>
                  <v-btn class="toolbarButton" @click="bold"><v-icon>format_bold</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn @click="italic"><v-icon>format_italic</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn @click="strike"><v-icon>strikethrough_s</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn @click="newSlide"><v-icon>fiber_new</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn @click="clearAll"><v-icon>clear_all</v-icon></v-btn>
                </v-flex>
          </v-layout>
      </header>
  </div>
</template>

<script>
export default {
  methods:{
    bold(){
      this.$emit("bold");
    },
    italic(){
      this.$emit("italic");
    },
    strike(){
      this.$emit("strike");
    },
    newSlide(){
      this.$emit("newSlide");
    },
    clearAll(){
      this.$emit("clearAll");
    },
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
#toolbar{
    margin-right: 0%
}


</style>