const snake = document.getElementById('snake');
const food = document.getElementById('food');

let snakeX = 10;
let snakeY = 10;
let foodX = 5;
let foodY = 5;
let dx = 0;
let dy = 0;
const grid = 20;
let snakeCells = [];

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -1;
        dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -1;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 1;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 1;
    }
}

function moveSnake() {
    snakeX += dx;
    snakeY += dy;
}

function drawSnake() {
    snake.style.left = snakeX * grid + 'px';
    snake.style.top = snakeY * grid + 'px';
}

function generateFood() {
    foodX = Math.floor(Math.random() * grid);
    foodY = Math.floor(Math.random() * grid);
    food.style.left = foodX * grid + 'px';
    food.style.top = foodY * grid + 'px';
}

function eatFood() {
    if (snakeX === foodX && snakeY === foodY) {
        generateFood();
    }
}

function gameLoop() {
    moveSnake();
    drawSnake();
    eatFood();
}

setInterval(gameLoop, 100);
