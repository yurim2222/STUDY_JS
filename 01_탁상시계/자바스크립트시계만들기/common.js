//시계함수 선언 - 2번 실행 : 초기실행, 1초마다 한번씩 실행

function clock(){ //생각만 =>여러번호출
	//현재 날짜 시간 담기
	var now = new Date();
	
	//Date()객체의 게터 : 날짜와 시간을 구분해서 따로따로 배열에 담기
	var dates = [now.getFullYear(),now.getMonth()+1,now.getDate()];
	var times = [now.getHours(),now.getMinutes(),now.getSeconds()];
	
	//요일 : 인덱스번호로 반환 => 
	var day = now.getDay(); //0~6숫자로 반환
	var week = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
	
	//문서객체를 선택
	var dateObject = document.getElementsByTagName('h3'); //복수의 배열로 문서객체를 가져옴
	var timeObject = document.getElementsByTagName('h2');
	var dayObject = document.getElementById('weekday');
	
	//값을 추가하기 전에 10보다 작은 숫자는 앞에 '0'을 붙임
    for(var i in dates){ //3번반복
        if(dates[i] < 10){
            dates[i] = '0' + dates[i];
        }
        if(times[i] < 10){ //날짜와 시간 개수가 같아서 같은 순번으로 반복이 가능
            times[i] = '0' + times[i];
        }
    }

	
	//각각의 값을 텍스트컨텐츠로 추가 : textContent 속성
	dayObject.textContent = week[day]; //배열로 호출
	
	for(var i in dateObject){  //3번 작성하지 않고 한번에 텍스트컨텐츠로 루가
		dateObject[i].textContent = dates[i];
	}
	for(var i in timeObject){  //3번 작성하지 않고 한번에 텍스트컨텐츠로 루가
		timeObject[i].textContent = times[i];
	}
	
}

clock();

setInterval(clock,1000); //콜백함수 자리는 함수를 불러올 때 ()작성하지 않음