import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default class Scene3D {
    constructor(canvas) {


        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.init(this.width, this.height);
    }

    init(w, h) {

        this.camera = new THREE.PerspectiveCamera(45, w / h, 0.25, 200000);
        this.camera.position.set(-1.8, 0.6, 2.7);

        this.scene = new THREE.Scene();
        this.scene2 = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f0f0);


        this.renderer = new THREE.WebGLRenderer({canvas:this.canvas, antialias: true});
        this.renderer.autoClear = false;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(w, h);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1;
        // this.renderer.shadowMap.enabled = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;


        // this.raycaster = new THREE.Raycaster();
        // this.renderer.domElement.addEventListener("click", onClick);
        // window.addEventListener('resize', onWindowResize);

    }

    initLights(effectController){
        // LIGHTS
        // let ambient = new THREE.AmbientLight(0xffffff, 0.8);
        this.ambient = new THREE.AmbientLight(0xcccccc, 0.8);	// 0.2

        this.scene.add(this.ambient);

        this.dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
        // dirLight.castShadow = true;
        // dirLight.shadow.camera.top = 2000;
        // dirLight.shadow.camera.bottom = - 2000;
        // dirLight.shadow.camera.left = - 2000;
        // dirLight.shadow.camera.right = 2000;
        // dirLight.shadow.camera.near = 0.1;
        // dirLight.shadow.camera.far = 40000;
        this.scene.add(this.dirLight);

        this.dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
        // dirLight2.castShadow = true;
        // dirLight2.shadow.camera.top = 2000;
        // dirLight2.shadow.camera.bottom = - 2000;
        // dirLight2.shadow.camera.left = - 2000;
        // dirLight2.shadow.camera.right = 2000;
        // dirLight2.shadow.camera.near = 0.1;
        // dirLight2.shadow.camera.far = 40000;
        this.scene.add(this.dirLight2);

        this.dirLight3 = new THREE.DirectionalLight(0xffffff, 0.3);
        // dirLight3.castShadow = true;
        // dirLight3.shadow.camera.top = 2000;
        // dirLight3.shadow.camera.bottom = - 2000;
        // dirLight3.shadow.camera.left = - 2000;
        // dirLight3.shadow.camera.right = 2000;
        // dirLight3.shadow.camera.near = 0.1;
        // dirLight3.shadow.camera.far = 40000;
        this.scene.add(this.dirLight3);

        this.ambient.intensity = effectController.intensity;
        this.ambient.color.setHSL(effectController.hue, effectController.saturation, effectController.lightness * effectController.ka);


        this.dirLight.position.set(effectController.lx, effectController.ly, effectController.lz);
        this.dirLight.color.setHSL(effectController.lhue, effectController.lsaturation, effectController.llightness);
        this.dirLight.intensity = effectController.lintensity;


        this.dirLight2.color.setHSL(effectController.lhue2, effectController.lsaturation2, effectController.llightness2);
        this.dirLight2.position.set(effectController.lx2, effectController.ly2, effectController.lz2);
        this.dirLight2.intensity = effectController.lintensity2;

        this.dirLight3.color.setHSL(effectController.lhue3, effectController.lsaturation3, effectController.llightness3);
        this.dirLight3.position.set(effectController.lx3, effectController.ly3, effectController.lz3);
        this.dirLight3.intensity = effectController.lintensity3;
    }

    initPmremGenerator(renderer) {

        this.pmremGenerator = new THREE.PMREMGenerator(renderer);
        this.pmremGenerator.compileEquirectangularShader();
    }

    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', this.render); // use if there is no animation loop
        this.controls.minDistance = 2;
        this.controls.target.set(0, 0, -0.2);
        this.controls.update();
    }

    onWindowResize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );

        this.render();

    }

    addModel(object){
        if (this.currentmodel) {
            this.scene.remove(this.currentmodel);

        }
        if (this.currentmodelGezi) {
            this.scene2.remove(this.currentmodelGezi);
        }


        let modelObj = object;
        let maxx = -Number.MAX_VALUE;
        let maxy = -Number.MAX_VALUE;
        let maxz = -Number.MAX_VALUE;
        let minx = Number.MAX_VALUE;
        let miny = Number.MAX_VALUE;
        let minz = Number.MAX_VALUE;
        let meshindex = 1;
        modelObj.traverse(function(mesh){
            if(mesh instanceof THREE.Mesh){
                // mesh.castShadow = true;
                mesh.geometry.computeBoundingBox();
                maxx = maxx < mesh.geometry.boundingBox.max.x ? mesh.geometry.boundingBox.max.x : maxx;
                minx = minx > mesh.geometry.boundingBox.min.x ? mesh.geometry.boundingBox.min.x : minx;

                maxy = maxy < mesh.geometry.boundingBox.max.y ? mesh.geometry.boundingBox.max.y : maxy;
                miny = miny > mesh.geometry.boundingBox.min.y ? mesh.geometry.boundingBox.min.y : miny;

                maxz = maxz < mesh.geometry.boundingBox.max.z ? mesh.geometry.boundingBox.max.z : maxz;
                minz = minz > mesh.geometry.boundingBox.min.z ? mesh.geometry.boundingBox.min.z : minz;




                /*let material1 = new THREE.MeshStandardMaterial({
                    "color": "#ffffff",
                    "flatShading": false,
                    "opacity": 1,
                    "refractionRatio": 0.98,
                    "side": 0,
                    "roughness": 0.99,
                    "metalness": 0,
                    "aoMapIntensity": 1,
                    "bumpScale": 1,
                    "normalScale": {
                        "x": 1.82,
                        "y": -1.82
                    },
                    "emissive": "#000000",
                    "emissiveIntensity": 1,
                    "skinning": true,
                    "isRoushness": true,
                    "reflectivity": 0,
                    "uvdata": [
                        "",
                        1,
                        0,
                        0,
                        0
                    ],

                });*/

                //若改为环境光源需要打开这
                // material1.envMap = ldrCubeRenderTarget.texture;
                // material1.envMapIntensity = 1;



                let phongMaterial = mesh.material;
                if ( Array.isArray( phongMaterial ) ) {
                    for(let i=0;i<phongMaterial.length;i++){
                        let temp = phongMaterial[i];
                        phongMaterial[i] = materialbu.clone();
                        let mat = phongMaterial[i];
                        mat.aoMap = temp.aoMap;
                        mat.normalMap = temp.normalMap;
                        mat.map = temp.map;
                    }
                }else{
                    let temp = phongMaterial;
                    mesh.material = materialbu.clone();
                    mesh.material.aoMap = temp.aoMap;
                    mesh.material.normalMap = temp.normalMap;
                    mesh.material.map = temp.map;
                }
                /*mesh.material = materialbu.clone();
                mesh.material.needsUpdate = true;
                mesh.name = mesh.name + '_'+meshindex;*/
                mesh.material.needsUpdate = true;
                meshindex++;


            }
        })

//            object.position.y = -(maxy - miny) / 2;
        object.position.x = -(maxx + minx) / 2;
        object.position.y = -(maxy + miny) / 2;
        object.position.z = -(maxz + minz) / 2;
//            object.rotateY(-Math.PI / 4);
        let maxb = ((maxx - minx) / (maxy - miny) > (this.width / this.height)) ? (maxx - minx) : (maxy - miny);


        this.camera.position.z = maxb / 2 / Math.tan(Math.PI / 8) * 2;
        this.camera.position.y = 0;
        this.camera.position.x = 0;
        this.controls.target.x = 0;
        this.controls.target.y = 0;
        this.controls.target.z = 0;
        this.controls.update();


        this.currentmodelGezi = modelObj.clone();
        this.currentmodelGezi.traverse(function(mesh){
            if(mesh instanceof THREE.Mesh){

                let material = new THREE.MeshBasicMaterial();
                material.wireframe = true;
                material.needsUpdate = true;
                mesh.material = material;
                mesh.geometry.needsUpdate = true;
                mesh.visible = false;
            }
        })
        this.scene2.add(this.currentmodelGezi);
        this.scene.add(modelObj);
        this.currentmodel = modelObj;
        this.render();
    }

    render(){
        this.renderer.clear();
        this.renderer.render( this.scene, this.camera );
        this.renderer.clearDepth();
        this.renderer.render(this.scene2, this.camera);
    }


}
