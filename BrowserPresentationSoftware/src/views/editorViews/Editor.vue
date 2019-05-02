<template>
  <div class="editor">
    <h1>Slide Show editor</h1>
    <textarea></textarea>
    <button type="button" @click="compile">Compile</button>
  </div>
</template>

<script>
export default {
    name: 'editor',
    methods:{
        compile(){
            window.alert('Not enabled so pretend it compiled');
        }
  }
}
</script>


<style scoped>

</style>
