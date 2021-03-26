

//DOM
const playground = document.querySelector('.playground > ul');
const gameText = document.querySelector('.game_text');
const scoreDisplay = document.querySelector('.score');
const replayBtn = document.querySelector('.game_text > button');

//Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

//자주 사용할 변수 선언
let score = 0;
let duration = 250;
let downInteval;
let tempMovingItem; //movingItem을 실행하기 전 담아두는 용도



const BLOCKS = {
    tree: [ //배열 안에 4개의 배열을 만든다 : 방향키에 따른 모양변화가 있기 때문
        [[2,1],[0,1],[1,0],[1,1]],
        [[1,2],[0,1],[1,0],[1,1]],
        [[1,2],[0,1],[2,1],[1,1]],
        [[2,1],[1,2],[1,0],[1,1]],
    ],
    square: [ 
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
    ],
    bar: [ 
        [[1,0],[2,0],[3,0],[4,0]],
        [[2,-1],[2,0],[2,1],[2,2]],
        [[1,0],[2,0],[3,0],[4,0]],
        [[2,-1],[2,0],[2,1],[2,2]],
    ],
    zee: [ 
        [[0,0],[1,0],[1,1],[2,1]],
        [[0,1],[1,0],[1,1],[0,2]],
        [[0,1],[1,1],[1,2],[2,2]],
        [[2,0],[2,1],[1,1],[1,2]],
    ],
    elLeft: [ 
        [[0,0],[0,1],[1,1],[2,1]],
        [[1,0],[1,1],[1,2],[0,2]],
        [[0,1],[1,1],[2,1],[2,2]],
        [[1,0],[2,0],[1,1],[1,2]],
    ],
    elRight: [ 
        [[2,0],[2,1],[1,1],[0,1]],
        [[0,0],[0,1],[0,2],[1,2]],
        [[0,0],[0,1],[1,0],[2,0]],
        [[0,0],[1,0],[1,1],[1,2]],
    ],
}



const movingItem = { //실질적으로 다음 블럭의 타입과 좌표의 정보들을 가지고 있는 변수
    type: '',
    direction: 0,
    top: 0,
    left: 3,
}


init();

//functions
function init(){

    tempMovingItem = { ...movingItem }; // ... => 스프레드 오퍼레이터는 movingItem 자체를 부르는 것이 아니라 코드블록 안의 내용만 가져오는것, 따라서 movingItem의 값이 변하더라도 tempMovingItem의 값이 변하지 않음
    //tempMovingItem을 먼저 바꾸고 그 값이 맞는지 아닌지 체크 한 후에 movingItem을 바꾼다

    for(let i=0; i<GAME_ROWS; i++){
        prependNewLine();
    }
    generateNewBlock();
}

function prependNewLine(){
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    for(let j=0; j<GAME_COLS; j++){
        const matrix = document.createElement('li');
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}

function renderBlocks(moveType=''){
    const { type, direction, top, left } = tempMovingItem; //비구조화 할당으로 tempMovingItem안에 들어있는 각각의 property들을 변수로 사용
    const movingBlocks = document.querySelectorAll('.moving');
    movingBlocks.forEach(moving =>{
        moving.classList.remove(type, 'moving');
    });
    BLOCKS[type][direction].some(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        //삼항연산자를 이용해서 블록이 그리드 밖을 벗어나지 못하도록 처리함 (조건식?참:거짓)
        const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
        const isAvailable = checkEmpty(target);
        if(isAvailable){
            target.classList.add(type, 'moving');
        }else{
            tempMovingItem = { ...movingItem}
            if(moveType === 'retry'){
                clearInterval(downInteval);
                showGameoverText();
            };
            setTimeout(()=>{
                renderBlocks('retry');
                if(moveType === 'top'){
                    seizeBlock();
                }
            },0)
            return true;
        }
    });
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
};

function seizeBlock(){
    const movingBlocks = document.querySelectorAll('.moving');
    movingBlocks.forEach(moving =>{
        moving.classList.remove('moving');
        moving.classList.add('seized');
    });
    checkMatch()
}

function checkMatch(){

    const childNodes = playground.childNodes;
    childNodes.forEach(child=>{
        let matched = true;
        child.children[0].childNodes.forEach(li=>{
            if(!li.classList.contains('seized')){
                matched = false;
            }
        })
        if(matched){
            child.remove();
            prependNewLine();
            score++; 
            scoreDisplay.innerText = score;
        }
    })
    generateNewBlock()
}

function generateNewBlock(){
    
    clearInterval(downInteval);
    downInteval = setInterval(()=>{
        moveBlock('top',1)
    },duration)
        
    const blockArray = Object.entries(BLOCKS)
    const randomIndex = Math.floor(Math.random() * blockArray.length);
    movingItem.type =blockArray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem};
    renderBlocks()

}

function checkEmpty(target){
    if(!target || target.classList.contains('seized')){  //contains메서드는 ''내부의 클래스를 포함하고 있는지 아닌지 확인해주는 메서드
        return false;
    }
    return true;
}



function moveBlock(moveType, amount){
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType)
};

function changeDirection(){
    const direction = tempMovingItem.direction
     direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction +=1;
     renderBlocks();
    }
    
function dropBlock(){
    clearInterval(downInteval);
    downInteval = setInterval(() =>{
        moveBlock('top',1);
    },10);
};

function showGameoverText(){
    gameText.style.display = "flex";
}

//event handling - 방향키를 읽어서 위치를 가져오도록 함
document.addEventListener('keydown', e=> {
    switch(e.keyCode){
        case 39:
            moveBlock('left', 1);   
            break;
        case 37:
            moveBlock('left', -1);
            break;
        case 38:
            changeDirection();
            break;
        case 40:
            moveBlock('top', 1);
            break;
        case 32:
            dropBlock();
            beak
        default:
            break;
    }
});

replayBtn.addEventListener('click',()=>{
    playground.innerHTML = "";
    gameText.style.display = "none";
    init();
})