const effectController = {

    // roughness:1,
    // metalness:0.1,
    // shininess: 40.0,

    shininess: 0.0,
    roughness: 0.51,
    metalness: 0.0,
    exposure: 1.0,
    aoMapIntensity:1,
    "opacity": 1,
    "refractionRatio": 0.98,
    "envMapIntensity": 1,
    "bumpScale": 1,
    "reflectivity": 0.65,

    ka: 0.17,
    kd: 0.51,
    ks: 0.2,
    metallic: true,

    hue:	0.121,
    saturation: 0,
    lightness: 0.66,
    intensity:0.8,


    // bizarrely, if you initialize these with negative numbers, the sliders
    // will not show any decimal places.
    lx: 0.32,
    ly: 0.39,
    lz: -0.7,
    lhue:	0.8,
    lsaturation: 0.01,	// non-zero so that fractions will be shown
    llightness: 1.0,
    lintensity :0.3,

    lx2: -0.32,
    ly2: 0.39,
    lz2: -0.7,
    lhue2:	0.8,
    lsaturation2: 0.01,	// non-zero so that fractions will be shown
    llightness2: 1.0,
    lintensity2 :0.3,

    lx3: 0.32,
    ly3: 0.39,
    lz3: 0.7,
    lhue3:	0.8,
    lsaturation3: 0.01,	// non-zero so that fractions will be shown
    llightness3: 1.0,
    lintensity3 :0.3,


    newTess: 15,
    bottom: true,
    lid: true,
    body: true,
    fitLid: false,
    nonblinn: false,
    newShading: "glossy",


};

export default effectController;
