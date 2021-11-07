<template>
    <img class="model-type-ico" @click="openModelList"
            :src="modeltypeobj.ico">
</template>

<script>
    export default {
        name: "ModelTypeItem",
        props:["modeltypeobj"],
        methods:{
            openModelList(){
                eventBus.$emit("showModelListView",this.modeltypeobj);
            }
        }
    }
</script>

<style scoped>
.model-type-ico {
    margin-right: 5px;
    width: 100px;
    height: 100px;
}
</style>
