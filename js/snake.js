import { getKeyDirection } from "./keys-input.js";

const SPEED = 5;
const SNAKE_BODY = [{x: 11, y: 11}];

let newSegments = 0;

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

    SNAKE_BODY.forEach(segment => {
        const SNAKE_PART = document.createElement('div');
        SNAKE_PART.style.gridRowStart = segment.y;
        SNAKE_PART.style.gridColumnStart = segment.x;
        SNAKE_PART.classList = 'snake';
        arg.appendChild(SNAKE_PART);
    });
}

function expandSnake(amount) {
    newSegments += amount;
}

function onSnake(position) {
    return SNAKE_BODY.some(segment => {
        return samePositions(segment, position);
    });
}

function samePositions(...arg) {
    return arg[0].x === arg[1].x && arg[0].y === arg[1].y;
}
export { SPEED, update, draw, expandSnake, onSnake };