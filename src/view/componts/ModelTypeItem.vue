<template>
    <img class="model-type-ico"
            :src="modeltypeobj.ico">
</template>

<script>
    export default {
        name: "ModelTypeItem",
        props:["modeltypeobj"],
    }
</script>

<style scoped>
.model-type-ico {
    margin-right: 5px;
    width: 100px;
    height: 100px;
}
</style>
