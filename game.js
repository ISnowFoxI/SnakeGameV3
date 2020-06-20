import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead,snakeCollision} from './snake.js'
import {update as updateFood , draw as drawFood , score } from './food.js'
import{ outsideGrid} from './grid.js'
let lastRenderTime = 0;
let gameOverVar =false;
const gameBoard = document.getElementById('gameBoard')

function main (currentTime) { 


    if (gameOverVar){
        if(confirm(`You lose: \nYour score: ${score} \nPress ok if you want to play again`)) return window.location.reload();
        return
    }
    window.requestAnimationFrame(main)
    const secendsSinceLastRender=(currentTime-lastRenderTime)/1000;
    if (secendsSinceLastRender< 1/snakeSpeed) {
        return
    }
    lastRenderTime=currentTime;

    update()
    draw()


}

window.requestAnimationFrame(main)


function update() { 
updateSnake()
updateFood()
gameOver()
}


 function draw() { 
     document.getElementById('score').innerHTML='Score: ' + score;
     gameBoard.innerHTML='';
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function gameOver() { 
    gameOverVar = outsideGrid(getSnakeHead()) || snakeCollision() 
}

