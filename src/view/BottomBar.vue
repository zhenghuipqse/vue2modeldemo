<template>
    <div id="bottom-bar">
        <model-type-list v-show="menuindex === 0"></model-type-list>
        <texture-list v-show="menuindex === 1"></texture-list>
    </div>
</template>

<script>
    import ModelTypeList from "@/view/componts/ModelTypeList";
    import TextureList from "@/view/componts/TextureList";

    export default {
        name: "BottomBar",
        computed:{
            menuindex() {
                return this.$store.state.menuindex;
            }
        },
        components: {TextureList, ModelTypeList}
    }

    /*import { reactive } from 'vue'
    import { useStore } from 'vuex'
    export default {
        setup(){
            let store = useStore()
            let data = reactive({
                count: 0
            })
            onMounted(() => {
                store.dispatch('addCount')
            })
            let add = () => {
                store.dispatch('addCount')
                data.count = data.count = store.getters.getCount
            }
            return{
                data,
                add
            }
        }
    }*/

</script>

<style scoped>
    #bottom-bar {
        width: 100%;
        height: 100px;
        overflow-y: hidden;
        overflow-x: auto;
        position: absolute;
        bottom: 0;
    }
</style>
