'use strict'
import PopUp from "./popup.js";
import Field from "./field.js";
import * as sound from "./sound.js";

const CARROT_COUNT = 8;
const BUG_COUNT = 4;

const gamePlayBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");


let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
    startGame();
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);


const onFieldClick = (e) => {
    if(!started){
        return;
    }
    if(e === 'carrot'){
        console.log("뺨뺨")
        score++;
        updateScoreBoard();
        if( score === CARROT_COUNT ){
            finishGame(true);
            stopGameTimer();
        };
    }else if(e === 'bug'){
        stopGameTimer();
        finishGame(false);
    };
};


gameField.setClickListener(onFieldClick);

gamePlayBtn.addEventListener("click", () => {
    if(started){
        stopGame();
    }else{
        startGame();
    }
});



const startGame = () => {
    started = true;
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
    sound.playBG();
    
    gameFinishBanner.hide();
};

const stopGame = () => {
    started = false;
    stopGameTimer();
    hideGameBtn();
    gameFinishBanner.showWithText('Replay?🤪');
    sound.playAlert();
    sound.stopBG();
};

const finishGame = (win) => {
    started = false;
    hideGameBtn();
    console.log(win);
    gameFinishBanner.showWithText( win ? 'YOU WON 😆' : 'YOU LOSE😥');
    started ? sound.playBG() : sound.stopBG();
    !win && sound.playAlert();
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



const updateScoreBoard = () => {
    gameScore.innerText = CARROT_COUNT - score;
};

let GAME_DURATION_SEC = 10;
const startGameTimer = () => {
    let remainingTimer = GAME_DURATION_SEC;
    updateTimerText(remainingTimer);
    timer = setInterval(() => {
        updateTimerText(--remainingTimer);
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
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
};










