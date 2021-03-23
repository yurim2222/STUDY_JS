//DOM
const playground = document.querySelector('.playground > ul')

//Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

//자주 사용할 변수 선언
let score = 0;
let duration = 400;
let downInteval;
let tempMovingItem; //movingItem을 실행하기 전 담아두는 용도

const BLOCKS = {
    tree: [ //배열 안에 4개의 배열을 만든다 : 방향키에 따른 모양변확 있기 때문
        [[0,0],[0,1],[1,0],[1,1]],
        [],
        [],
        [],
    ]
}

const movingItem = { //실질적으로 다음 블럭의 타입과 좌표의 정보들을 가지고 있는 변수
    type: 'tree',
    direction: 0,
    top: 0,
    left: 0,
}


init();

//functions
function init(){
    tempMovingItem = { ...movingItem }; // ... => 스프레드 오퍼레이터는 movingItem 자체를 부르는 것이 아니라 코드블록 안의 내용만 가져오는것, 따라서 movingItem의 값이 변하더라도 tempMovingItem의 값이 변하지 않음
    //tempMovingItem을 먼저 바꾸고 그 값이 맞는지 아닌지 체크 한 후에 movingItem을 바꾼다

    for(let i=0; i<GAME_ROWS; i++){
        prependNewLine()
    }
    renderBlocks();
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

function renderBlocks(){
    const { type, direction, top, left } = tempMovingItem; //비구조화 할당으로 tempMovingItem안에 들어있는 각각의 property들을 변수로 사용
    BLOCKS[type][direction].forEach(block => {
        const x = block[0];
        const y = block[1];
        const target = playground.childNodes[y].childNodes[0].childNodes[x];
        target.classList.add(type);
    })
}