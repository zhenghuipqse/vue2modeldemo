<template>
    <div id="view3d" ref="view3d">

    </div>
</template>

<script>

    import * as THREE from "three"
    import Scene3D from "@/util/Scene3D";
    import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader"
    import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader"
    import defaultModel from "@/util/defaultModel";


    export default {
        name: "View3d",
        mounted() {
            this.init();

            eventBus.$on("changeShowModel",this.loadModel);
            eventBus.$on("changeModelTexture",this.changeTexture);

            this.loadModel(defaultModel);
        },

        methods: {
            init() {

                this.scene3d = new Scene3D();

                this.$refs.view3d.appendChild(this.scene3d.canvas);

                this.loadmanager = new THREE.LoadingManager();

            },

            loadModel(modelobj) {


                new MTLLoader( this.loadmanager ).setPath( modelobj.path )
                    .load( modelobj.mtl, materials => {

                        materials.preload();
                        let loader = new OBJLoader(this.loadmanager);
                        loader.setPath( modelobj.path ).setMaterials( materials )
                            .load( modelobj.obj, object => {

                                this.scene3d.addModel(object)

                            });

                    } );


            },

            changeTexture(textureobj){
                console.log("huihui")
                this.scene3d && this.scene3d.changeTexture(textureobj.url);
            }
        }
    }
</script>

<style scoped>

    #view3d {
        width:100%;
        height:100%
    }

</style>
