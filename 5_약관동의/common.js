let allChk = document.getElementById('allCheck');
let chk01 = document.getElementById('check01');
let chk02 = document.getElementById('check02');
let chk03 = document.getElementById('check03');
let chkboxes = document.querySelectorAll('.each input');
let btn = document.querySelector('button');

const agreements = {
    chk01: false,
    chk02: false,
    chk03: false,
}

chkboxes.forEach((item) => item.addEventListener('input', toggleCheckbox));


function toggleCheckbox(e){
    const {checked, id} = e.target;
    agreements[id] = checked;
    checkAllStatus();
    toggleSubmitButton();
}

function toggleSubmitButton(){
    if(chk01.checked == true && chk02.checked == true){
        btn.classList.add('agree');
        btn.disabled = false;
    }else{
        btn.classList.remove('agree');
        btn.disabled = true;
    }
}

function checkAllStatus() {
    if (chk01.checked == true && chk02.checked == true && chk03.checked == true) {
        allChk.checked = true;
        btn.classList.add('agree');
        btn.disabled = false;
    }else {
        allChk.checked = false;
        btn.classList.remove('agree');
        btn.disabled = true;
    }
}




allChk.addEventListener('input',function(e){
    const {checked} = e.target;
    if(checked){
        chkboxes.forEach((item) =>{
            item.checked = true;
        })
        btn.classList.add('agree');
        btn.disabled = false;

    }else{
        chkboxes.forEach((item) =>{
            item.checked = false;
        })
        btn.classList.remove('agree');
        btn.disabled = true;
    }
    
});

