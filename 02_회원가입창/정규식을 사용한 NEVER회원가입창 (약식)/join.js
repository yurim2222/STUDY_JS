let id = document.getElementById('userId');
let pw = document.getElementById('userPw');
let alert01 = document.getElementById('alert01');
let alert02 = document.getElementById('alert02');
let pwChk = document.getElementById('pwChk');
let alert03 = document.getElementById('alert03');
let alert04 = document.getElementById('alert04');
let birthYears = document.getElementById('birth01');
let birthMonth = document.getElementById('birth02');
let birthDates = document.getElementById('birth03');


let bMonthBox = '';
for(let i=2021;i>=1900;i--){
    bMonthBox += '<option>' + i + '년</option>'
}


birthMonth.innerHTML = bMonthBox

pw.addEventListener('blur',function(){
    let v = this.value; 
    let eng = v.search(/[a-z]/ig); 
    let spe = v.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(v.length >= 8 && v.length <= 16 && eng > -1 && spe > -1 ){
        alert02.style.display='inline';
        alert01.style.display='none';
    }else{
        alert02.style.display='none';
        alert01.style.display='inline';
    }
});



pwChk.addEventListener('blur',function (){
    let v = this.value;
    let originValue = pw.value;

    

    if( v.length === 0 ){
        alert04.style.display='none';
        alert03.style.display='none';
    }else if(v === originValue){
        alert04.style.display='inline';
        alert03.style.display='none';
    }else {
        alert04.style.display='none';
        alert03.style.display='inline';
    }
    console.log(v.length)
})