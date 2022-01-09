import { SPEED, update as updateSnake, draw as drawSnake } from './snake.js';
import { update as updatePrey, draw as drawPrey } from './prey.js';
const BOARD = document.getElementById('board');

let lastRenderTime = 0;

window.requestAnimationFrame(main);

function main(currentTime) {
    window.requestAnimationFrame(main);
    
    const secondsSinceLaceRender = (currentTime - lastRenderTime) / 1000;
    
    if(secondsSinceLaceRender < 1 / SPEED)
        return;

    lastRenderTime = currentTime;
    
    console.log('Render');
    //console.log(currentTime);
    //console.log(secondsSinceLaceRender);

    update();
    draw();

}

function update() {
    updateSnake();
    updatePrey();
}

function draw() {
    BOARD.innerHTML = '';
    drawSnake(BOARD);
    drawPrey(BOARD);
}