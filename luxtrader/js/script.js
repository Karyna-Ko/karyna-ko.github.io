// Dropdown menu in header
let userIcon = document.querySelector('.user-header__icon');
let userMenu = document.querySelector('.user-header__menu');

    userIcon.addEventListener('click', function (e) {
            userMenu.classList.toggle('active');
    });

document.documentElement.addEventListener('click', function (e) {
    if (!e.target.closest('.user-header')) {
        userMenu.classList.remove('active');
    }
});

// Burger
let iconMenu = document.querySelector('.icon-menu');
    iconMenu.addEventListener('click', function (e) {
        let menuBody = document.querySelector('.menu__body');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
    

// ibg function for image background
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}  
    ibg();

//Swiper - 1
var swiper = new Swiper(".main-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    autoHeight: true,
    speed: 400,
    navigation: {
        nextEl: ".control-main-slider__arrow_next",
        prevEl: ".control-main-slider__arrow_prev",
    },
});

//Swiper - 2
var swiper = new Swiper(".lots__slider", {
    loop: true,
/*     autoHeight: true, */
    speed: 500,
    slidesPerView: 3,
    navigation: {
      nextEl: ".control-slider-lots__arrow_next",
      prevEl: ".control-slider-lots__arrow_prev",
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        634: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        }
      }
  });

//Swiper - 3
var swiper = new Swiper(".quotes__slider", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,    
    },
    observer: true,
    observeParent: true,
    speed: 1000,
    slidesPerView: 1,
    navigation: {
      nextEl: ".control-slider-quotes__circle",
    }
  });


// Smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    let activeLink = document.querySelector('.active');
    if (activeLink != null) 
      activeLink.classList.remove('active');
      this.classList.add('active');

    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}