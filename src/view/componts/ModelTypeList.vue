<template>
    <div id="model-type-list">
        <model-type-item
                :modeltypeobj="item"
                :key="index"
                v-for="(item, index) in modeltypelist">
        </model-type-item>
    </div>
</template>

<script>
    import axios from "axios";
    import ModelTypeItem from "./ModelTypeItem"

    export default {
        name: "ModelTypeList",
        data() {
            return {
                modeltypelist: [],
            }
        },
        components: {
            ModelTypeItem
        },
        mounted() {
            axios.get('/data/modeltype.json')
                .then((response) => {
                    // this.$set('modeltypelist',response.data);
                    this.modeltypelist = response.data;
                    console.log("HUIHUI", response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
#model-type-list {
    white-space: nowrap;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
}
</style>
