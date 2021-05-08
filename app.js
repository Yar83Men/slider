const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length+'px';
    for(let i=0; i<images.length; i++){
        images[i].style.width = width+"px";
        images[i].style.height = 'auto';
    }
    rollSlider();
}

window.onresize = init;

function rollSlider(){
    sliderLine.style.transform = `translate(${-count*width}px)`;
}
init();

document.querySelector('.slider-next').onclick = function(){
    count++;
    if(count >= images.length) count=0;
    rollSlider();
}

document.querySelector('.slider-prev').onclick = function(){
    count--;
    if(count < 0) count = images.length-1;
    rollSlider();
}
