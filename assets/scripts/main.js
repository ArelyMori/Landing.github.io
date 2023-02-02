const menu=document.querySelector('.menu');
const navbar=document.querySelector('.nav');

menu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});
/*Slider Scrip*/
const btnLeft=document.querySelector('·btn-left');
const btnRight=document.querySelector('·btn-right');

let images=[];
let index=0;

images[0] ='assets/images/Login.jpg';
images[1] = 'assets/images/search.jpg';
images[2] = 'assets/images/Reservation.jpg';

btnLeft.addEventListener('click', ()=>{
    changeImage(-1);
})
btnRight.addEventListener('click', ()=>{
    changeImage(1);
})
function changeImage(dir){
    document.querySelector('.circle')[index].style='color:#C4C4C4';
    document.querySelector('.step-text')[index].style='display=none';
    index=index+dir;
    if(index<0){
        index=2;
    }else if(index>2){
        index=0;
    }
    document.querySelector('#slider-image').src=images[index];
    document.querySelector('.circle')[index].style='color:#C4C4C4';
    document.querySelector('.circle')[index].style='display:block';
}
/*Switch*/
const Check=document.querySelector('.check');
Check.addEventListener('click' , ()=>{
    let id=Check.checked;
    console.log(id);
    if(id==true){
        location.href="";

    }
    else {
        location.href='../index.html';

    }
    Check.checked=id;
})