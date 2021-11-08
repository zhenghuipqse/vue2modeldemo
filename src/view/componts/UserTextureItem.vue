<template>
    <div id="texture-item">
        <img class="texture-ico" @click="changeModelTexture"
             ref="img"
             :src="textureobj.ico">
    </div>
</template>

<script>
    export default {
        name: "UserTextureItem",
        data(){
            return {
                isdrag:false,
                disX:0,
                disY:0,
            }
        },
        props: ["textureobj"],
        methods: {
            changeModelTexture() {
                eventBus.$emit("changeModelTexture",this.textureobj);
            },
            // <!--             @mousedown.prevent="onmousedown"-->
            // <!--             @mousemove.prevent="onmousemove"-->
            onmousedown(e){
                this.disX = e.clientX - this.$refs.img.offsetLeft;
                this.disY = e.clientY - this.$refs.img.offsetTop;
                this.isdrag = true;
            },
            onmousemove(oEvent) {
                if(!this.isdrag)
                    return;
                let x = oEvent.clientX - this.disX;
                let y = oEvent.clientY - this.disY;

                // 图形移动的边界判断
                x = x <= 0 ? 0 : x;
                x = x >= fa.offsetWidth-box.offsetWidth ? fa.offsetWidth-box.offsetWidth : x;
                y = y <= 0 ? 0 : y;
                y = y >= fa.offsetHeight-box.offsetHeight ? fa.offsetHeight-box.offsetHeight : y;
                box.style.left = x + 'px';
                box.style.top = y + 'px';
            },
            // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
            onmouseleave () {
                if(!this.isdrag)
                    return;
                this.isdrag = false;
            },
            // 鼠标弹起后停止移动
            onmouseup() {
                if(!this.isdrag)
                    return;
                this.isdrag = false;
            }
        }
    }
</script>

<style scoped>
    #texture-item {
        width: 100px;
        height: 100px;
        display: inline-block;
        position: relative;
    }

    .texture-ico {
        margin: 5px;
        width: 90px;
        height: 90px;
    }

</style>
