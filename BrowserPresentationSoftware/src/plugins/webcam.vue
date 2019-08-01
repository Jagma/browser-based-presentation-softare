<template>
    <div>
        <video id="video" width="400" height="600" autoplay ></video>
    </div>
</template>

<script>
/**<button @click="play">play</button>
        <button @click="stop">stop</button> */
export default {
    name: 'webcam',
    data() {
        return {
            showWebcam:false,
        }
    },
    methods: {
        toggleWebcam(){
            this.showWebcam = !this.showWebcam;
            if(this.showWebcam){
                this.play();
            }else{
                this.stop();
            }
        },
        play(){
            var video = document.getElementById('video');
            navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            navigator.getMedia({
                video:true,
                audio:false
            }, function(stream){
                video.srcObject  = (stream);
                video.play();
            }, function(){
            //
            });
        },
        stop(){
             var video = document.getElementById('video');
             video.srcObject =null;
        }
    },
    mounted() {
    
        //this.play();
    },
    watch: {
        soverlay: function(){
          //  window.alert("caught: "+ soverlay);
          //  this.toggleWebcam();
        }
    },
    props: ['soverlay'],
}
</script>

<style>

</style>
