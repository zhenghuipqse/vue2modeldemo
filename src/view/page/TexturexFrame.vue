<template>
    <div id="textures-frame"
    v-show="isshowTexturexFrame">
        <div id="title-bar">
            <Button type="text" @click="onCancleHandler">
                <Icon type="ios-arrow-back"></Icon>
            </Button>
            <Button id="done-btn" type="text" @click="onAddTextures">完成</Button>
        </div>
        <div id="style-bar">
            <Button :class="{ selected: menuindex===0 }"
                    class="menu-btn">
                全部
            </Button>
            <Button :class="{ selected: menuindex===1 }"
                    class="menu-btn">颜色
            </Button>
            <Button :class="{ selected: menuindex===2 }"
                    class="menu-btn">风格
            </Button>
            <Button :class="{ selected: menuindex===3 }"
                    class="menu-btn">应用
            </Button>
        </div>
        <div id="textures-list">
            <texture-item :textureobj="item"
                          ref="textureItems"
                          :key="index"
                          v-for="(item, index) in texturelist"></texture-item>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import TextureItem from "@/view/page/TextureItem";

    export default {
        name: "TexturexFrame",
        components: {TextureItem},
        data(){
            return {
                menuindex:0,
                texturelist:[]
            }
        },
        computed:{
            isshowTexturexFrame(){
                return this.$store.state.isshowTexturexFrame;
            }
        },
        methods:{
            onCancleHandler(){
                this.$store.commit("showTexturexFrame",false);
            },
            onAddTextures(){
                let mytextures = this.$refs.textureItems.filter(item => item.isSelected).map(item => item.textureobj);
                this.$store.commit("addtexture",mytextures);
                this.$store.commit("showTexturexFrame",false);
            }
        },
        mounted() {
            axios.get('/data/texturelist.json')
                .then((response) => {
                    // this.$set('modeltypelist',response.data);
                    this.texturelist = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    #textures-frame {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #f9f9f9;
    }
    #title-bar {
        width: 100%;
        height: 32px;
    }

    #done-btn {
        position: absolute;
        right: 10px;
        color: cornflowerblue;
    }

    #style-bar {
        width: 100%;
        height: 32px;
        background: #f9f9f9;

    }

    .menu-btn {
        width: 60px;
        height: 30px;
        margin-right: 1px;
        margin-top: 1px;
        border-style: none;
        display: inline-block;
    }

    .menu-btn .selected {
        border-bottom-style: solid;
    }

    #textures-list {
        line-height: 0px;
    }
</style>
