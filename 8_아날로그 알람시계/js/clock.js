let hourHandler = document.querySelector('.hour');
let minuteHandler = document.querySelector('.minute');
let secondHandler = document.querySelector('.second');
let clock = document.querySelector('.clockBody');

let audio = document.querySelector('audio');
let offBtn = document.querySelector('.alretOffBtn');


setDate = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegrees = ( hour / 12 +  minute / 360 ) * 360;
    const minuteDegrees = ( minute / 60 ) * 360;
    const secondDegrees = (second / 60) * 360;
    hourHandler.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHandler.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHandler.style.transform = `rotate(${secondDegrees}deg)`;

    if(minute == 00){
        if(!audio.classList.contains('off')){
            audio.play();
        }else{
            audio.pause();
        }
    
    }
    
    if(hour > 18 || hour < 06){
        clock.style.background = 'url(../main_clock_night.png)';
        clock.style.backgroundSize = '100%';
    }else{
        clock.style.background = 'url(../main_clock_day.png)';
        clock.style.backgroundSize = '100%';
    }
    
}


offBtn.addEventListener('click',function(e){
    audio.classList.toggle('off');
});

setInterval(setDate, 1000);

