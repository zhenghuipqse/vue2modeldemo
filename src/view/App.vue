<template>
    <div>
        <view3d ></view3d>
        <menu-bar/>
        <bottom-bar/>
        <model-list/>
        <texturex-frame></texturex-frame>
    </div>
</template>

<script>
    import MenuBar from "./MenuBar.vue";
    import BottomBar from "@/view/BottomBar";
    import View3d from "@/view/View3d";
    import ModelList from "@/view/componts/ModelList";
    import TexturexFrame from "@/view/page/TexturexFrame";

    export default {
        name: "App",
        data() {
            return {}
        },
        components: {
            TexturexFrame,
            ModelList,
            BottomBar,
            View3d,
            MenuBar
        }
    }
</script>

<style scoped>

</style>
