let hourHandler = document.querySelector('.hour');
let minuteHandler = document.querySelector('.minute');
let secondHandler = document.querySelector('.second');
let clock = document.querySelector('.clockBody');


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

    

    if(hour > 18 || hour < 06){
        clock.style.background = 'url(../main_clock_night.png)';
        clock.style.backgroundSize = '100%';
    }else{
        clock.style.background = 'url(../main_clock_day.png)';
        clock.style.backgroundSize = '100%';
    }
}


setInterval(setDate, 1000);