<template>
    
</template>

<script>
export default {
    methods: {
        updateCurrentSlide(slideNumber, amount){
            slideNumber = slideNumber + amount;
            if(slideNumber>slideShow.length-1)
                slideNumber = slideShow.length-1;
            if(slideNumber<0)
                 slideNumber = 0;
            return slideNumber;
        },
    },
}
</script>

<style>

</style>
