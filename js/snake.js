import { getKeyDirection } from "./keys-input.js";

const SPEED = 1;
const SNAKE_BODY = [{x: 11, y: 11}];

function update() {
    //console.log('update snake');

    const keyDirection = getKeyDirection();

    for(let i = SNAKE_BODY.length - 2; i >= 0; i--) {
        SNAKE_BODY[i + 1] = { ...SNAKE_BODY[i] };
    }

    SNAKE_BODY[0].x += keyDirection.x;
    SNAKE_BODY[0].y += keyDirection.y;
}

function draw(arg) {
    //console.log('draw snake');
    arg.innerHTML = '';

    SNAKE_BODY.forEach(segment => {
        const SNAKE_PART = document.createElement('div');
        SNAKE_PART.style.gridRowStart = segment.y;
        SNAKE_PART.style.gridColumnStart = segment.x;
        SNAKE_PART.classList = 'snake';
        arg.appendChild(SNAKE_PART);
    });
}

export { SPEED, update, draw };