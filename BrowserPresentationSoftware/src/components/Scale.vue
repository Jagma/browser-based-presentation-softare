<template>
    <div ref="scaleablewrapper" class="scaleable-wrapper" id="scaleable-wrapper">
        <div ref="veryspecificdesign" class="very-specific-design" id="very-specific-design">
            <h1>I am designed just so.</h1>
            <p>My design is intentional. I want to be scaled in such a way that scales the design. No reflows or anything, just straight up scaling. Kinda like SVG.</p>            
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skull-and-crossbones.svg" alt="" />
            <p class="bigred"> ✖ ✖ ✖ </p>
            <p>Height: {{startData}}</p>
        </div>
        <v-btn @click="doResize(startData)">Hello</v-btn>
    </div>
</template>

<script>
import { Resize } from 'vuetify/es5/directives';


export default {
    name: 'Scale',
    data() {
        return {
            starterata: "sup",
            el: null,
            elHeight: null,
            elWidth: null,
            wrapper: null,
            startData: null
        }
    },
    methods:{
        doResize(ui){
//            window.alert(ui.size.height);
            var scale, origin;
            scale = Math.min(
                ui.size.width /  this.elWidth,
                ui.size.height / this.elHeight
            );
            
            //this.$refs["veryspecificdesign"]
            this.$refs["veryspecificdesign"].style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")" 
           // this.$refs["veryspecificdesign"].style.backgroundColor = '#523831';
           //# return "translate(-50%, -50%) " + "scale(" + scale + ")" 
        },
    },
    mounted : function() {
        this.el = this.$refs["veryspecificdesign"];
        this.elHeight = this.$refs["veryspecificdesign"].clientHeight;
        this.elWidth = this.$refs["veryspecificdesign"].clientWidth;
        this.wrapper = this.$refs["scaleablewrapper"];
        this.startData = {size: {                    
                    width: this.$refs["scaleablewrapper"].clientWidth,
                    height: this.$refs["scaleablewrapper"].clientHeight
                }};
        this.$refs["scaleablewrapper"].style.resize = "auto"
        doResize(this.startData)
    }
//     this.$refs["veryspecificdesign"].style.backgroundColor = '#1f21cc';

}
/*

 startData: {
                size: {                    
                    width: this.$refs["scaleablewrapper"].clientWidth,
                    height: this.$refs["scaleablewrapper"].clientHeight
                },
            },
*/

</script>

<style>
body {
  background: #ccc;
  padding: 20px;
}

h1{
    transform: translate(-50% -50%);
    font-size: x-large;
    color: brown;
}

.very-specific-design {
  width: 600px;
  height: 400px;
  padding: 50px;
  text-align: center;
  background: white;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.scaleable-wrapper {
  padding: 20px;
  resize: both;
  position: relative;
  background: #666;
  height: 400px;
}

.ui-resizable-se {
  width: 10px;
  height: 10px;
  background: orange;
  position: absolute;
  bottom: 0;
  right: 0;
}

.bigred {
  color: red;
  font-size: 5rem;
}
</style>