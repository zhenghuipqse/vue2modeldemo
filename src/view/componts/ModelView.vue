<template>
    <img class="model-ico" @click="showModel"
         :src="modelobj.ico">
</template>

<script>
    export default {
        name: "ModelView",
        props:["modelobj"],
        methods:{
            showModel(){
                eventBus.$emit("changeShowModel",this.modelobj);
            }
        }
    }
</script>

<style scoped>
    .model-ico {
        margin-right: 5px;
        width: 100px;
        height: 100px;
    }

</style>
