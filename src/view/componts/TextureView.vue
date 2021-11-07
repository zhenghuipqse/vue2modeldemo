<template>
    <img class="model-type-ico" @click="changeModelTexture"
         :src="textureobj.ico">
</template>

<script>
    export default {
        name: "TextureView",
        props:["textureobj"],
        methods:{
            changeModelTexture(){
                eventBus.$emit("changeModelTexture",this.textureobj);
            }
        }
    }
</script>

<style scoped>

</style>
