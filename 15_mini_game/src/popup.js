'use strict'

export default class PopUp{
    constructor() {        
        this.popUp = document.querySelector(".pop-up");
        this.popUpMSG = document.querySelector(".pop-up__message");
        this.popUpReplayBtn = document.querySelector(".pop-up__refresh");
        
        this.popUpReplayBtn.addEventListener('click', () => {
            this.onClick && this.onClick();
            hide();
        });
    }

        setClickListener(onClick){
            this.onClick = onClick;
        }

        hide() {
            this.popUp.style.display = "none";
        }

        showWithText(text) {
            this.popUp.style.display = "block";
            this.popUpMSG.innerText = text;
        };
}