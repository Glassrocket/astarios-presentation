
//VARS------------------------------------
const mainWrapper = document.getElementById('main-wrapper-id')
const slideContainer = document.getElementsByClassName('slide');
const nextBtn = document.getElementsByClassName('next');
const backBtn = document.getElementsByClassName('back');
const vanBar = document.getElementById('nav-bar-inner-id');
const nitem = document.getElementsByClassName('nitem')
vanBar.style.width = 0 + "%";





// HIDE EVERYTHING-------------------------------------
const hideSlider = () => {
    for (i = 0; i < slideContainer.length; i++) {
        slideContainer[i].classList.remove('slide-conteiner-show')
        slideContainer[i].classList.add('slide-conteiner-hidden')
        slideContainer[i].classList.add('transition-1')
    }
}


// BACK ----------------------------------------------

backBtn[0].addEventListener('click', () => {
    hideSlider()
    slideContainer[4].classList.remove('transition-1');
    slideContainer[4].classList.add('slide-conteiner-show');
    vanBar.style.width = 100 + "%";
 })

 backBtn[1].addEventListener('click', () => {
    hideSlider()
    slideContainer[0].classList.remove('transition-1');
    slideContainer[0].classList.add('slide-conteiner-show');
    vanBar.style.width = 0 + "%";
 })

 backBtn[2].addEventListener('click', () => {
    hideSlider()
    slideContainer[1].classList.remove('transition-1');
    slideContainer[1].classList.add('slide-conteiner-show');
    vanBar.style.width = 25 + "%";
 })

 backBtn[3].addEventListener('click', () => {
    hideSlider()
    slideContainer[2].classList.remove('transition-1');
    slideContainer[2].classList.add('slide-conteiner-show');
    vanBar.style.width = 50 + "%";
 })

 backBtn[4].addEventListener('click', () => {
    hideSlider()
    slideContainer[3].classList.remove('transition-1');
    slideContainer[3].classList.add('slide-conteiner-show');
    vanBar.style.width = 75 + "%";
 })

// NEXT -----------------------------------------------------


 nextBtn[0].addEventListener('click', () => {
   hideSlider()
    slideContainer[1].classList.remove('transition-1');
    slideContainer[1].classList.add('slide-conteiner-show');
    vanBar.style.width = 25 + "%";
 })

 nextBtn[1].addEventListener('click', () => {
    hideSlider()
    slideContainer[2].classList.remove('transition-1');
    slideContainer[2].classList.add('slide-conteiner-show');
    vanBar.style.width = 50 + "%";
 })

 nextBtn[2].addEventListener('click', () => {
    hideSlider()
    slideContainer[3].classList.remove('transition-1');
    slideContainer[3].classList.add('slide-conteiner-show');
    vanBar.style.width = 75 + "%";
 })

 nextBtn[3].addEventListener('click', () => {
    hideSlider()
    slideContainer[4].classList.remove('transition-1');
    slideContainer[4].classList.add('slide-conteiner-show');
    vanBar.style.width = 100 + "%";
 })

 nextBtn[4].addEventListener('click', () => {
    hideSlider()
    slideContainer[0].classList.remove('transition-1');
    slideContainer[0].classList.add('slide-conteiner-show');
    vanBar.style.width = 0 + "%";
 })




// NAV BAR --------------------------------------------
 nitem[0].addEventListener('click', () => {
    hideSlider()
    slideContainer[0].classList.remove('transition-1');
    slideContainer[0].classList.add('slide-conteiner-show');
    vanBar.style.width = 0 + "%";
 })

 nitem[1].addEventListener('click', () => {
    hideSlider()
    slideContainer[1].classList.remove('transition-1');
    slideContainer[1].classList.add('slide-conteiner-show');
    vanBar.style.width = 25 + "%";
 })

 nitem[2].addEventListener('click', () => {
    hideSlider()
    slideContainer[2].classList.remove('transition-1');
    slideContainer[2].classList.add('slide-conteiner-show');
    vanBar.style.width = 50 + "%";
 })

 nitem[3].addEventListener('click', () => {
    hideSlider()
    slideContainer[3].classList.remove('transition-1');
    slideContainer[3].classList.add('slide-conteiner-show');
    vanBar.style.width = 75 + "%";
 })

 nitem[4].addEventListener('click', () => {
    hideSlider()
    slideContainer[4].classList.remove('transition-1');
    slideContainer[4].classList.add('slide-conteiner-show');
    vanBar.style.width = 100 + "%";
 })

