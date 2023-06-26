import { World } from "/src/world/world.js";

function main() {
    const container = document.getElementById('scene-container');
    const world = new World(container);
    world.render();
}
main();