<template>
    <div id="menu-bar">
        <button :class="{ selected: menuindex===0 }"
                class="menu-btn"
                @click="menuClick(0)">11
        </button>
        <button :class="{ selected: menuindex===1 }"
                class="menu-btn"
                @click="menuClick(1)">22
        </button>
    </div>
</template>

<script>
    export default {
        name: "MenuBar",
        data() {
            return {

            }
        },
        computed: {
            menuindex() {
                return this.$store.state.menuindex;
            }
        },
        methods:{
            menuClick(index){
                this.$store.commit("updatemenuindex",index);
            }
        }
    }
</script>

<style scoped>
    #menu-bar {
        position: absolute;
        bottom: 100px;
    }

    .menu-btn {
        width: 100px;
        height: 32px;
        margin-right: 20px;
        border-style: none;
        display: inline-block;
    }

    .selected {
        border-bottom-style: solid;
    }
</style>
