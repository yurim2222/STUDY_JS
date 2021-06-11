'use strict'
import PopUp from "./popup.js";

const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();

const CARROT_COUNT = 8;
const BUG_COUND = 4;

const gamePlayBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const bgSound = new Audio('./sound/bg.mp3');
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const alertSound = new Audio('./sound/game_win.mp3');

let item = undefined;

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
    startGame();
});

gamePlayBtn.addEventListener("click", () => {
    if(started){
        stopGame();
    }else{
        startGame();
    }
});


field.addEventListener("click", e => onFieldClick(e));

const startGame = () => {
    started = true;
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
};

const stopGame = () => {
    started = false;
    stopGameTimer();
    hideGameBtn();
    gameFinishBanner.showWithText('Replay?🤪');
};

const finishGame = (win) => {
    started = false;
    hideGameBtn();
    console.log(win);
    gameFinishBanner.showWithText( win ? 'YOU WON 😆' : 'YOU LOSE😥');
    started ? playSound(bgSound) : pauseSound(bgSound);
    !win && playSound(alertSound);
    score = 0;
};

const showStopBtn = () => {
    gamePlayBtn.style.visibility = "initial";
    const icon = gamePlayBtn.querySelector(".fas");
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
};

const hideGameBtn = () => {
    gamePlayBtn.style.visibility = "hidden";
    gameTimer.style.visibility = "hidden";
    gameScore.style.visibility = "hidden";
};

const showTimerAndScore = () => {
    gameTimer.style.visibility = "visible";
    gameScore.style.visibility = "visible";
};



const onFieldClick = (e) => {
    if(!started){
        return;
    }
    if(e.target.className === 'carrot'){
        playSound(carrotSound);
        e.target.remove();
        score++;
        updateScoreBoard();
        if( score === CARROT_COUNT ){
            finishGame(true);
            stopGameTimer();
        };
    }else if(e.target.className === 'bug'){
        playSound(bugSound);
        stopGameTimer();
        finishGame(false);
    };
};

const updateScoreBoard = () => {
    gameScore.innerText = CARROT_COUNT - score;
};

let GAME_DURATION_SEC = 10;
const startGameTimer = () => {
    let remainingTimer = GAME_DURATION_SEC;
    updateTimerText(remainingTimer);
    timer = setInterval(() => {
        updateTimerText(--remainingTimer);
        console.log(remainingTimer);
        console.log(GAME_DURATION_SEC);
        if(remainingTimer <= 0){
            stopGameTimer();
            finishGame(false);
            return;
        };
    },1000);
};

let stopGameTimer = () => {
    clearInterval(timer);
    return;
};

const updateTimerText = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`
};


const initGame = () => {
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    addItem('carrot', CARROT_COUNT , './img/carrot.png');
    addItem('bug', BUG_COUND , './img/bug.png');
};



const addItem = (className, count, imgPath) => {
    const x1 = 0;
    const y1 = 0;
    const imgSize = "80";
    const x2 = fieldRect.width - imgSize;
    const y2 = fieldRect.height - imgSize;

    for(let i = 0 ; i < count ; i++){
        item = document.createElement('img');
        item.setAttribute("class", className);
        item.setAttribute("src", imgPath);
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.top = `${y}px`;
        item.style.left = `${x}px`;
        field.appendChild(item);
    };
};


const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};

const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
};

const pauseSound = (sound) => {
    sound.pause();
};









