import { Camera, Group, Scene, PerspectiveCamera, BoxBufferGeometry, Color, 
    WebGLRenderer,
    Mesh,
    MeshBasicMaterial, } from "https://cdn.skypack.dev/three@0.132.2";

/* import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";

import {
    Camera,
    Group,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    MeshBasicMaterial,
    } from '/vendor/three/build/three.module.js';
    import { OrbitControls } from '/vendor/three/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from '/vendor/three/examples/jsm/loaders/GLTFLoader.js';
*/

    const container = document.querySelector('#scene-container');

    const scene = new Scene();

    const fov = 35; // AKA Field of View
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane

    const camera = new PerspectiveCamera(fov, aspect, near, far);

    const renderer = new WebGLRenderer();

    const length = 2;
    const width = 2;
    const depth = 2;

    const geometry = new BoxBufferGeometry(length, width, depth);

    const material = new MeshBasicMaterial();

    scene.background = new Color('skyblue');

    camera.position.set(0, 0, 10);

    const cube = new Mesh(geometry, material);

    scene.add(cube);

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.append(renderer.domElement);

    renderer.render(scene, camera);