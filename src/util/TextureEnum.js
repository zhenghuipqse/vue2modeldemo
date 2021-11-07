import * as THREE from "three"

export const materialpi = new THREE.MeshStandardMaterial(
    {
        "color": "#ffffff",
        "flatShading": false,
        "side": 0,
        "opacity": 1,
        "refractionRatio": 0.98,
        "roughness": 0.99,
        "metalness": 0.2,
        "bumpScale": 1,
        "normalScale": {
            "x": 1.51,
            "y": 1.51
        },
        "emissive": "#000000",
        "emissiveIntensity": 1,
        "skinning": true,


        aoMapIntensity: 1.0,

        // metalnessMap : metalnessMap;

        // envMap : ldrCubeRenderTarget.texture;

        // y scale is negated to compensate for normal map handedness.
        // normalScale: new THREE.Vector2( 0.85, - 0.85 )
    }
);

//bu
export const materialbu = new THREE.MeshPhongMaterial(
    {
        "color": "#ffffff",
        "flatShading": false,
        "side": 0,
        "opacity": 1,
        "refractionRatio": 0.98,
        "bumpScale": 1,
        "reflectivity": 0.65,
        "normalScale": {
            "x": 1.51,
            "y": 1.51
        },
        "emissive": "#000000",
        "emissiveIntensity": 1,
        "skinning": true,

        specular: 0x111111,
        shininess: 0,

        aoMapIntensity: 1.0,

        // metalnessMap : metalnessMap;

        // envMap : ldrCubeRenderTarget.texture;

        // y scale is negated to compensate for normal map handedness.
        // normalScale: new THREE.Vector2( 0.85, - 0.85 )
    }
);
