new WOW().init();

let shareBtn=document.getElementsByClassName('share')[0];
let chooseShareType=document.getElementsByClassName('chooseShareType')[0];

shareBtn.addEventListener('click',function () {
    chooseShareType.classList.toggle('active');
})