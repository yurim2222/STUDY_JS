'use strict'
import Field from "./field.js";
import * as sound from "./sound.js";


export default class Game {
    constructor(gameDuration, carrotCount, bugCount){
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameTimer = document.querySelector(".game__timer");
        this.gameScore = document.querySelector(".game__score");
        this.gamePlayBtn = document.querySelector(".game__button");
        this.gamePlayBtn.addEventListener("click", () => {
            if(this.started){
                this.stop();
            }else{
                this.start();
            }
        });

        
        this.gameField = new Field(bugCount, bugCount);
        this.gameField.setClickListener(this.onFieldClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    };

    onFieldClick = (e) => {
        if(!this.started){
            return;
        }
        if(e === 'carrot'){
            this.score++;
            this.updateScoreBoard();
            if( this.score === this.carrotCount ){
                this.finish(true);
                this.stopTimer();
            };
        }else if(e === 'bug'){
            this.stopTimer();
            this.finish(false);
        };
    };

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }

    start(){
        this.started = true;
        this.init();
        this.showStopBtn();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBG();
        
    };
    stop(){
        this.started = false;
        this.stopTimer();
        this.hideGameBtn();
        sound.playAlert();
        sound.stopBG();
        this.onGameStop && this.onGameStop("cancel");
    };
    finish(win){
        this.started = false;
        this.hideGameBtn();
        this.started ? sound.playBG() : sound.stopBG();
        !this.win && sound.playAlert();
        this.score = 0;
        this.onGameStop && this.onGameStop(win ? "win" : "lose");
    };

    showStopBtn(){
        this.gamePlayBtn.style.visibility = "initial";
        const icon = this.gamePlayBtn.querySelector(".fas");
        icon.classList.add("fa-stop");
        icon.classList.remove("fa-play");
    };

    hideGameBtn(){
        this.gamePlayBtn.style.visibility = "hidden";
        this.gameTimer.style.visibility = "hidden";
        this.gameScore.style.visibility = "hidden";
    };

    showTimerAndScore(){
        this.gameTimer.style.visibility = "visible";
        this.gameScore.style.visibility = "visible";
    };


    updateScoreBoard(){
        this.gameScore.innerText = this.carrotCount - this.score;
    };

    startGameTimer(){
        let remainingTimer = this.gameDuration;
        this.updateTimerText(remainingTimer);
        this.timer = setInterval(() => {
            this.updateTimerText(--remainingTimer);
            if(remainingTimer <= 0){
                this.stopTimer();
                this.finish(false);
                return;
            };
        },1000);
    };

    stopTimer(){
        clearInterval(this.timer);
        return;
    };

    updateTimerText(time){
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`
    };
    
    
    init(){
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    };
};