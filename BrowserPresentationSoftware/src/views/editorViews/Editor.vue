<template>
  <div class="editor">
    <h1>Slide Show editor</h1>
    <v-container>
      <v-layout>
        <v-flex xs6>
          <v-textarea
              rows="32"
              outline
              name="input-7-4"
              label="Source"
              class="sourceEditor"
            
          >
          </v-textarea>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn :loading="loading" :disabled="loading" color="success" @click="compile">Compile</v-btn>
  </div>
</template>

<script>
export default {
  name: "editor",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    compile() {
      window.alert("Not enabled so pretend it compiled");
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    }
  }
};
</script>


<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
.sourceEditor{
  width: 800px;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
