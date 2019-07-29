<template>
<div>  
    <div class="scaleable-wrapper" id="scaleable-wrapper">
        <div class="very-specific-design" id="very-specific-design" ref="veryspecificdesign">
            <h1>I am designed just so.</h1>
            <p>My design is intentional. I want to be scaled in such a way that scales the design. No reflows or anything, just straight up scaling. Kinda like SVG.</p>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skull-and-crossbones.svg" alt="" />
            <p class="bigred"> ✖ ✖ ✖ </p>
    </div>
</div>



</div>

</template>

<script>

import jQuery from 'jquery'
export default {
    
    name:'temp',
    data() {
        return {    
        }
    },
    methods: {
        
    },
    created() {
        
    },
    mounted() {
        this.$nextTick(() => {
            var $el = jQuery("#very-specific-design");
            var elHeight = $el.outerHeight();
            var elWidth = $el.outerWidth();

            var $wrapper = jQuery("#scaleable-wrapper");
            $el.css({
                //transform: "translate(-50%, -50%) " + "scale()"
                transform: "translate(-50%, 50%) scale(4)"
            })
           /* $wrapper.resizable({
            resize: function() {window.alert('kek');}
            });

            function doResize(event, ui) {
                    var scale;
                    this.scale = Math.min(
                        ui.size.width / this.elWidth,    
                        ui.size.height / this.elHeight
                    );
                    this.$el.css({
                        transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
                    });
            }

            var starterData = { 
            size: {
                    width: this.$wrapper.width(),
                    height: this.$wrapper.height()
                }
            }
            doResize(null, starterData);*/
        });
    },
}
</script>

<style>
    body {
        background: #ccc;
        padding: 20px;
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