$('.blogs-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
});


const Burger = document.querySelector('.header-burger')
const Head = document.querySelector('.header-register')
const body = document.querySelector('body')


Burger.addEventListener('click', () => {
    if (Burger.classList.contains('header-burger')) {
        Burger.classList.toggle('active')
    }
    Head.classList.toggle('active')
    body.classList.toggle('no-scroll')
})



let header = $('.header'),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset)

$(window).on('scroll', function () {
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset)
});

function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
};
