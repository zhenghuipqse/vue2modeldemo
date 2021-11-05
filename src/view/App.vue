<template>
    <div>
        <div>{{count}}</div>

        <input v-model="count">
        <menu-bar/>
        <bottom-bar/>
    </div>
</template>

<script>
    import MenuBar from "./MenuBar.vue";
    import BottomBar from "@/view/BottomBar";

    export default {
        name: "App",
        data() {
            return {count: 4}
        },
        components: {
            BottomBar,
            MenuBar
        }
    }
</script>

<style scoped>

</style>
