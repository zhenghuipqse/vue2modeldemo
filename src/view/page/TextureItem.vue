<template>
    <div id="texture-item">
        <img class="texture-ico" @click="selectTexture"
             :src="textureobj.ico">
        <Icon class="selected-ico" type="ios-heart" v-show="isSelected"/>
        <Icon class="selected-ico" type="ios-heart-outline" v-show="!isSelected"/>
    </div>
</template>

<script>
    export default {
        name: "TextureItem",
        props:["textureobj"],
        data(){
            return {
                isSelected:false,
            }
        },
        methods:{
            selectTexture(){
                this.isSelected = !this.isSelected

            }
        }
    }
</script>

<style scoped>
    #texture-item {
        width: 100px;
        height: 100px;
        display: inline-block;
        position: relative;
    }

    .texture-ico {
        margin: 5px;
        width: 90px;
        height: 90px;
    }

    .selected-ico {
        color: red;
        position: absolute;
        right: 5px;
        top: 5px;
    }
</style>
