$(document).ready(function(){
    $("#slider").owlCarousel({
        loop:true,
        nav: true,
        items:1,
        smartSpeed: 1000,
    });

    $("#slider_2").owlCarousel({
        loop:true,
        nav: true,
        dots: false,
        items:1,
        smartSpeed: 1000,
        navText: ["<img src='icons/arrow_prev.svg'>","<img src='icons/arrow_next.svg'>"]
    });
    $('.owl-prev').addClass('second_prev');
    $('.owl-next').addClass('second_next');
    $('.owl-nav').addClass('second_nav');

    $('.promo__burger').click(function(event){
        $('.promo__burger,.row').toggleClass('active');
    });
  });

  function openSol(evt, title) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(title).style.display = "block";
    evt.currentTarget.className += " active";
}