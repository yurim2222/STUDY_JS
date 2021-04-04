let lotto = [];
let num;
let x;

function creat(){
    for(let i=1;i<=6;i++){
        num = Math.floor(Math.random() * 44) + 1;
        for(let j in lotto){
            if(num == lotto[j]){
                num = Math.floor(Math.random() * 44) + 1;
            }
        }
        lotto.push( num );   
    }
        lotto.sort(function(left, right){
            return left - right;
        });
	
	lotto.map(function(x){
		if(x > 0){
			x = '<span class="ball">' + x + '</span>';
			
		lotto.push(x);
		}
	});
	lotto.splice(0,6)
	
}

function output(){
    let lottoNum = document.getElementById('number');
    let box = document.getElementById('box');
	
    lotto = [];
	
    
	creat()
	
	
	lottoNum.innerHTML=lotto
	console.log(lotto)
	
	let ball = document.getElementsByClassName('ball');
	let bgColor = ['red', 'green', 'blue', 'purple', '#555', 'orange'];
	
	for(let i in bgColor){
		ball[i].style.backgroundColor = bgColor[i]
	}
	for(i=0;i<=6;i++){
		ball[i].style.color='#fff';
	}

}

