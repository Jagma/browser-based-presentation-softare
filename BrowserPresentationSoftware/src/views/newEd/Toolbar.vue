<template>
  <div>
      <header>
          <v-layout row justify-center id="toolbar">
                <v-flex xs12 md2>
                  <v-btn class="toolbarButton"><v-icon>format_bold</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn><v-icon>format_italic</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn><v-icon>strikethrough_s</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn><v-icon>title</v-icon></v-btn>
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn><v-icon>clear_all</v-icon></v-btn>
                </v-flex>
          </v-layout>
      </header>
  </div>
</template>

<script>
export default {

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