let dropdown = document.querySelector('.dropdown');
let toggleBtn = document.querySelector('.dropdown-toggle');
let menu = document.querySelector('.dropdown-menu');
let options = document.querySelectorAll('.dropdown-option');
let nextBtn = document.querySelector('.next-button');

toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('show')
});
toggleBtn.addEventListener('blur', function(){
    menu.classList.remove('show');
});

options.forEach(function (item) {
    item.addEventListener('click', function(e){
        const branch = e.currentTarget.textContent.trim();
        toggleBtn.textContent = branch;
        toggleBtn.classList.add('selected');
        nextBtn.disabled = false;
    })
})
