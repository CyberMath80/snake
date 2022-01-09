import { onSnake, expandSnake } from './snake.js';

let prey = {x: 10, y: 1};
const EXPAND = 1;

function update() {
    if(onSnake(prey)) {
        expandSnake(EXPAND); // grow snake
        prey = {x:11, y:11}; // set new food position
    }
}

function draw(arg) {
    const PREY_ELEMENT = document.createElement('div');
    PREY_ELEMENT.style.gridRowStart = prey.y;
    PREY_ELEMENT.style.gridColumnStart = prey.x;
    PREY_ELEMENT.classList = 'prey';
        arg.appendChild(PREY_ELEMENT);
}

export { update, draw };