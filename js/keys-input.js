let keyDirection     = { x: 0, y: 0 };
let lastKeyDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp' :
        case 'z' :
        case 'Z' :
            if(lastKeyDirection.y !== 0)
                break;
            
            keyDirection = { x: 0, y: -1 };
            break;

        case 'ArrowDown' :
        case 'x' :
        case 'X' :
            if(lastKeyDirection.y !== 0)
            break;

            keyDirection = { x: 0, y: 1 };
            break;

        case 'ArrowRight' :
        case 'd' :
        case 'D' :
            if(lastKeyDirection.x !== 0)
                break;
            
            keyDirection = { x: 1, y: 0 };
            break;

        case 'ArrowLeft' :
        case 'q' :
        case 'Q' :
            if(lastKeyDirection.x !== 0)
                break;
            
            keyDirection = { x: -1, y: 0 };
            break;

        default:
            break;
    }
});

function getKeyDirection() {
    lastKeyDirection = keyDirection;

    return keyDirection;
}

export { getKeyDirection };