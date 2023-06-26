import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/resizer.js";



class World {

    #camera;
    #scene;
    #renderer;

    constructor(container) {
        this.#camera = createCamera();
        this.#scene = createScene();
        this.#renderer = createRenderer();
        container.append(this.#renderer.domElement);

        const cube = createCube();

        this.#scene.add(cube);

        const resizer = new Resizer(container, this.#camera, this.#renderer);
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }
}

export { World };