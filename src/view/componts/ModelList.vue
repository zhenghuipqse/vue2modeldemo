<template>
    <div id="model-list-view" v-show="isShowModelList">
        <Button :size="'large'" type="primary" @click="hideModelList">
            <Icon type="ios-arrow-back" />
            返回
        </Button>
        <div id="model-list">
            <model-view
                    :modelobj="item"
                    :key="index"
                    v-for="(item, index) in modellist">
            </model-view>
        </div>

    </div>

</template>

<script>
    import axios from "axios";
    import ModelView from "@/view/componts/ModelView";

    export default {
        name: "ModelList",
        data(){
            return {
                modellist:[],
            }
        },
        components: {ModelView},
        computed:{
            isShowModelList(){
                return this.$store.state.isShowModelList;
            }
        },
        mounted() {
            eventBus.$on("showModelListView",this.showModelListView)
        },
        methods:{
            showModelListView(modeltype){
                this.loadModelList(modeltype);
                this.$store.commit("showModelList",true);
            },
            hideModelList(){
                this.$store.commit("showModelList",false);
            },
            loadModelList(modeltype){
                axios.get('/data/modellist.json')
                    .then((response) => {
                        this.modellist = response.data;
                        console.log("HUIHUI", response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });


            }


        }
    }
</script>

<style scoped>
    #model-list-view {
        position: absolute;
        bottom: 0px;
        height: 140px;
        width: 100%;
        background: #f9f9f9;
    }
</style>
