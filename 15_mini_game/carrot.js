const play = document.querySelector(".play");
const field = document.querySelector(".field");
const bug = document.querySelectorAll(".bug");
const carrot = document.querySelectorAll(".carrot");
const timer = document.querySelector(".timer");

let count = 10;
play.addEventListener("click", () => {
    play.classList.toggle("pause");
    
    for(let i=0 ; i<=5 ; i++){
        bugCreate();
    }
    for(let i=0 ; i<=10 ; i++){
        carrotCreate();
    }


    timer.innerText = `00:${count}`;
    const countTenSec = setInterval(() => {
        timer.innerText = `00:${count}`;
        count--;
        timer.innerText = `00:${count}`;
            if(count < 10){
                timer.innerText = `00:0${count}`;
            }   
        count === 0 && clearInterval(countTenSec);
    },1000);
    
});

const bugCreate = () => {
    const bugImg = document.createElement('img')
    bugImg.setAttribute("class", "bug");
    bugImg.setAttribute("src", "./img/bug.png");
    field.appendChild(bugImg);
}
const carrotCreate = () => {
    const bugImg = document.createElement('img')
    bugImg.setAttribute("class", "carrot");
    bugImg.setAttribute("src", "./img/carrot.png");
    field.appendChild(bugImg);
}



