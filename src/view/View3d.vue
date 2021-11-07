<template>
    <div id="view3d">
<canvas id="canvas" ref="canvas" ></canvas>
    </div>
</template>

<script>

    import * as THREE from "three"
    import Scene3D from "@/util/Scene3D";
    import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader"
    import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader"
    export default {
        name: "View3d",
        mounted() {
            this.init();

            eventBus.$on("changeShowModel",this.loadModel);

            // this.loadModel();
        },

        methods: {
            init() {

                this.scene3d = new Scene3D(this.$refs.canvas);

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


            }
        }
    }
</script>

<style scoped>

    #view3d {
        width:100%;
        height:100%
    }

    #canvas {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>
