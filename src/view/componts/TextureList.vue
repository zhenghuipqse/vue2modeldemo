<template>
    <div id="texture-list">
        <user-texture-item
                :textureobj="item"
                :key="index"
                v-for="(item, index) in mytextures">
        </user-texture-item>

        <div id="add-btn-div">
            <Button id="add-btn" @click="openTextureFrame">
                <Icon size="60" type="ios-add" />
            </Button>
        </div>

    </div>
</template>

<script>
    import UserTextureItem from "@/view/componts/UserTextureItem";

    export default {
        name: "TextureList",
        components: {UserTextureItem},
        computed: {
            mytextures() {
                return this.$store.state.mytextures;
            }
        },
        methods:{
            openTextureFrame(){
                this.$store.commit("showTexturexFrame",true);
            }
        }
    }
</script>

<style scoped>
    #texture-list {
        white-space: nowrap;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }
    #add-btn-div {
        width: 100px;
        height: 100px;
        display: inline-block;
        position: relative;
    }
    #add-btn {
        width: 90px;
        height: 90px;
        margin: 5px;
        /*margin-top: -90px;*/
    }
</style>
