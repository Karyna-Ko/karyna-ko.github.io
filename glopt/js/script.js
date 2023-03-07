$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 1200,
    speed: 1200,
    slidesToShow: 1,
    draggable: true,
    pauseOnHover: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',
  });

  function toggleSlide (item) {
    $(item).each(function(i) {
        $(this).on('click',function(e) {
            e.preventDefault();
            $('.prices__card_first').eq(i).toggleClass('prices__card_first_active');
            $('.prices__card_second').eq(i).toggleClass('prices__card_second_active');
        })
      });
  };

  toggleSlide('.prices__card-btn');
  toggleSlide('.prices__card-btn-back');
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header_active');
      })
  })
})