'use strict'
import PopUp from "./popup.js";
import Game from "./game.js";

const CARROT_COUNT = 8;
const BUG_COUNT = 4;



const gameFinishBanner = new PopUp();

const game = new Game(3,3,3);
game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason){
      case "cancel":
        message = "Replay?🤪"
      break;
    case "win":
        message = "YOU WON😘"
      break;
     case "lose":
        message = "YOU LOSE😥"
      break;
    default:
      throw new Error("not valid reason");   
    }
    gameFinishBanner.showWithText(message);
});


gameFinishBanner.setClickListener(() => {
  game.start();
});


