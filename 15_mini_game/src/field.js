'use strict'

import * as sound from "./sound.js";

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const imgSize = 80;

export default class Field {
    constructor(carrotCount, bugCount){
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.field = document.querySelector(".game_field");
        this.fieldRect = this.field.getBoundingClientRect();

        this.field.addEventListener("click", this.onClick);
    };

    init(){
        this.field.innerHTML = ''; 

        this._addItem('carrot', this.carrotCount , './img/carrot.png');
        this._addItem('bug', this.bugCount , './img/bug.png');
    };

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    };

    _addItem (className, count, imgPath) {
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - imgSize;
        const y2 = this.fieldRect.height - imgSize;
        let item = undefined;
    
        for(let i = 0 ; i < count ; i++){
            item = document.createElement('img');
            item.setAttribute("class", className);
            item.setAttribute("src", imgPath);
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.top = `${y}px`;
            item.style.left = `${x}px`;
            this.field.appendChild(item);
        };
    };

    onClick = e => {
        if(e.target.className === 'carrot'){
            sound.playCarrot();
            e.target.remove();
            this.onItemClick && this.onItemClick('carrot');
        }else if(e.target.className === 'bug'){
            sound.playBug();
            this.onItemClick && this.onItemClick('bug');
        };
    };


};


const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};