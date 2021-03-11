let tabLink = document.getElementsByClassName('tabLink');
let tabContent = document.getElementsByClassName('tabContent');


tabLink[0].className += " active";
tabContent[0].style.display = 'block';

for(var i=0;i<tabLink.length;i++){
    tabLink[i].addEventListener('click',function(){
        for(var j=0;j<tabLink.length;j++){
            tabLink[j].className = 'tabLink';
            tabContent[j].style.display = 'none';
        }
        
        this.className += " active";
        
        var idName = this.textContent.toLowerCase(); 
        document.getElementById(idName).style.display = 'block';
    });
}

