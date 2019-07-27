<template>
    <div class="row mt-4">
        <div class="col-md-6">
            <h4 class="light">Preview</h4>
            <div :key="markdown"
                class="tex preview"
                v-markdown
                >{{markdown}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "preview",
    data(){
        return {
       //     markdown: 'text',
        };
    },
    props: ['markdown'],
}
</script>

<style scoped>
.container{
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    font-family: 'Roboto', sans-serif;
    height: 950px;
    width: 100%;
}
.light{
    color: white;
    text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.9);
}
.textarea{
  resize: none;
  border: 2px dashed orange;
  outline: none;
}

.tex{
  height: 400px;
  width: 700px;
  background-color: rgba(255, 255, 255, 0.9);
}
.blockquote {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
}
#texTab {
  width: 700px;
}
.tempppp{
  background-color: black;
  width: 10px;
}
</style>
