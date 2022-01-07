import { SPEED, update, draw } from './snake.js';

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

    draw(BOARD);

}
