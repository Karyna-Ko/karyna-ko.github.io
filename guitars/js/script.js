//Slider
if(document.querySelector('.reviews__slider')) {
    const  swiper = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        speed: 800,
        autoHeight: true,
        loop: true,

        pagination: {
          el: '.slider-reviews__pagination',
          clickable: true,
        }
      }); 
}

//Cursor 
document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { 
    const el = document.querySelector('.follow-cursor') 

    window.addEventListener('mousemove', e => { 
      const target = e.target 
      if (!target) return

      if (target.closest('a')) { 
        el.classList.add('follow-cursor_active') 
      } else { 
        el.classList.remove('follow-cursor_active')
      }

      el.style.left = e.pageX + 'px' 
      el.style.top = e.pageY + 'px' 
    })
  }

  followCursor() 

})
