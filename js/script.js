const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item,i) => {
    lines[i].style.width = item.innerHTML;
});

$('.slide_from_left').click(() => {
    $('html, body').animate({
        scrollTop: $('.portfolio').offset().top
    }, 600);
});
$('.slide_from_right').click(() => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top
    }, 600);
});

/* validateForms('#consultation-form'); */

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
});

(function (d, w, c) {
    (w[c] = w[c] || []).push({formId:183001,host:"formdesigner.com.ua",formHeight:100, el: "form_183001_1",center: 1,scroll: 0});
    var s = d.createElement("script"), g = "getElementsByTagName";
    s.type = "text/javascript"; s.charset="UTF-8"; s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.com.ua/js/iform.js?v=0.0.3";
    var h=d[g]("head")[0] || d[g]("body")[0];
    h.appendChild(s);
})(document, window, "fdforms");

//Implementing Language Switching on a Website
const activeLang = document.querySelector('._active');
    activeLang.addEventListener('click', (e) => {
        e.preventDefault();
        let content = document.querySelector('.lang__content');
        content.style.display = 'block';
    })  


