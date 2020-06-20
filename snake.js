import { getInputDirection } from "./input.js";
export let snakeSpeed=10;
const snakeBody= [ 
    {x:10, y:11}
]
let newSegments = 0;
document.addEventListener("keydown", speedUp)
document.addEventListener("keyup", speedUp)


function speedUp (event) { 
    let key = event.keyCode
    
     if (key == 16){
        if(snakeSpeed!=20)
        snakeSpeed=snakeSpeed*2;   
            else if (snakeSpeed==20) 
            snakeSpeed=10;
        }
        else if (key==18) { 
            if(snakeSpeed!=5)
        snakeSpeed=snakeSpeed/2;   
            else if (snakeSpeed==5) 
            snakeSpeed=10;
        }
        }
    

export function update() { 
    addSegments()
   const inputDirection = getInputDirection()
for (let i = snakeBody.length-2; i >=0 ; i --){
        snakeBody[i+1]={ ...snakeBody[i]}
}

 snakeBody[0].x +=inputDirection.x;
 snakeBody[0].y+=inputDirection.y;
}


export function draw(gameBoard) { 
    snakeBody.forEach(segment => { 
        const snakeElement= document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })

}

export function snakeGrow(amount) { 
    newSegments+= amount;

}

export function onSnake(position, {ignoreHead=false} = {}) { 
    return snakeBody.some((segment,index) => { 
        if(ignoreHead&& index===0) 
        {
            return false

        }
        return equalPositions(segment,position)
    })
}

export function getSnakeHead() { 
    return snakeBody[0];
}

export function snakeCollision() {
    return onSnake(snakeBody[0], {ignoreHead:true})
}

function equalPositions(position1,position2) { 
    return position1.x===position2.x && position1.y===position2.y
}

function addSegments() { 
    for ( let i = 0 ; i < newSegments ; i++)
    {
        snakeBody.push({ ...snakeBody[snakeBody.length-1]})
    }
        newSegments=0;
       
}
