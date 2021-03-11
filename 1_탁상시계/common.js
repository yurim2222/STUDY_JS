setInterval(() => {
    let today = new Date();
    let dates = [today.getFullYear(), today.getMonth(), today.getDate() ];
    let times = [today.getHours(), today.getMinutes(), today.getSeconds()];
    
    let day = today.getDay();
    let weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saterday'];
    
    let dateObject = document.getElementsByTagName('h3');
    let timeObject = document.getElementsByTagName('h2');
    let dayObject = document.getElementById('weekday');
    
    for(let i in dates){
        if(dates[i] < 10){
            dates[i] = '0' + dates[i]
        }
        if(times[i] < 10 ){
            times[i] = '0' + times[i]
        }
    }
    
    dayObject.textContent = weeks[day];
    for(let i in dateObject){
        dateObject[i].textContent = dates[i]
    }
    for(let i in timeObject){
        timeObject[i].textContent =times[i]
    }
});