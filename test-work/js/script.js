let hamburger = document.querySelector('.navigation__burger');
let menu = document.querySelector('.menu__body');
const body = document.body;
let closeBtn = document.querySelector('.warning__btn');
let closeWarning = document.querySelector('.warning');

closeBtn.addEventListener('click', function(){
	closeWarning.classList.toggle('close');
}); 

const toggleMenu = () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('no-scroll');
  
};

hamburger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let itMenu = target == menu || menu.contains(target);
  let itsHamburger = target == hamburger;
  let menuActive = menu.classList.contains('active');
  
  if (!itMenu && !itsHamburger && menuActive) {
    toggleMenu();
  }
});

