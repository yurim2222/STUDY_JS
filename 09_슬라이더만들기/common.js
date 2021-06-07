            const slideList = document.querySelector('.slide_list');
            const slideContents = document.querySelectorAll('.slide_content');
            const slideBtnNext = document.querySelector('.slide_btn_next');
            const slideBtnPrev = document.querySelector('.slide_btn_prev');
            const slideWidth = 400;
            const slideSpeed = 300;
            const slideLength = slideContents.length;
            const startNum = 0;


            let curIndex = startNum;
            let curSlide = slideContents[curIndex];
            curSlide.classList.add('slide_active');

            slideList.style.width = slideWidth * (slideLength + 2) + 'px';

            //copy first and last slide
            let firstChild = slideList.firstElementChild;
            let lastChild = slideList.lastElementChild;
            let clonedFirst = firstChild.cloneNode(true);
            let clonedLast = lastChild.cloneNode(true);

            //add copied Slide
            slideList.appendChild(clonedFirst);
            slideList.insertBefore(clonedLast, slideList.firstElementChild);

            slideList.style.transform = `translateX(-${slideWidth * (startNum + 1)}px)`;


            

            const auto = setInterval(function(){
                if(curIndex <= slideLength - 1){
                    slideList.style.transform = `translateX(-${slideWidth * (curIndex + 2)}px)`;                    
                    slideList.style.transition = slideSpeed + 'ms';
                }
                if(curIndex === slideLength - 1){
                    setTimeout(function(){
                        slideList.style.transition = '0ms';
                        slideList.style.transform = `translateX(-${slideWidth}px)`;
                    },slideSpeed);
                    curIndex = -1;
                }
                curSlide.classList.remove('slide_active');
                curSlide = slideContents[++curIndex];
                curSlide.classList.add('slide_active');
            },4000);

            //btn click event
            //next
            slideBtnNext.addEventListener('click',function(){
                clearInterval(auto);
                if(curIndex <= slideLength - 1){
                    slideList.style.transform = `translateX(-${slideWidth * (curIndex + 2)}px)`;                    
                    slideList.style.transition = slideSpeed + 'ms';
                }
                if(curIndex === slideLength - 1){
                    setTimeout(function(){
                        slideList.style.transition = '0ms';
                        slideList.style.transform = `translateX(-${slideWidth}px)`;
                    },slideSpeed);
                    curIndex = -1;
                }
                curSlide.classList.remove('slide_active');
                curSlide = slideContents[++curIndex];
                curSlide.classList.add('slide_active');
            });

            //prev
            slideBtnPrev.addEventListener('click',function(){
                clearInterval(auto);
                if(curIndex >= 0 ){
                    slideList.style.transform = `translateX(-${slideWidth * curIndex }px)`;                    
                    slideList.style.transition = slideSpeed + 'ms';
                }
                if(curIndex === 0){
                    setTimeout(function(){
                        slideList.style.transition = '0ms';
                        slideList.style.transform = `translateX(-${slideWidth * slideLength}px)`;
                    },slideSpeed);
                    curIndex = slideLength;
                }
                curSlide.classList.remove('slide_active');
                curSlide = slideContents[--curIndex];
                curSlide.classList.add('slide_active');
            });


