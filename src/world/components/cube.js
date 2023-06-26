import {BoxBufferGeometry, Mesh, MeshStandardMaterial} from "/node_modules/three/build/three.module.js";

function createCube(){
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshStandardMaterial();
    const cube = new Mesh(geometry, material);
    return cube;
}

export { createCube };