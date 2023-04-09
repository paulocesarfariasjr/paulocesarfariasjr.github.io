const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');
const Images = document.querySelectorAll('.image');


let currendSlide = 0 ;

function hideSlider(){

    Images.forEach(item => item.classList.remove('on'))

  
}

function ShowSlider(){


    Images[currendSlide].classList.add('on')


}


function NextSlide(){

hideSlider()
if (currendSlide === Images.length -1 ) {
    currendSlide = 0
}else{

currendSlide ++

}
ShowSlider()
}

function backSlide (){

hideSlider()
if (currendSlide === 0) {
    currendSlide = Images.length -1
}else{

    currendSlide--

}

ShowSlider()


}








rightBtn.addEventListener('click',NextSlide)










leftBtn.addEventListener('click',backSlide)