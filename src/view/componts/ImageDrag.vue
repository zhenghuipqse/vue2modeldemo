<template>
    <div id="image-drag">
        <img id="drag-img" v-show="dragimg" :src="dragimg">
    </div>
</template>

<script>
    export default {
        name: "ImageDrag",
        computed: {
            dragimg() {
                return this.$store.state.isshowTexturexFrame;
            }
        }
    }
</script>

<style scoped>
    #image-drag {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    #drag-img {
        position: absolute;
        width: 90px;
        height: 90px;
    }
</style>
