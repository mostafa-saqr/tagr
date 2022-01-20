$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    rtl: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: true,
            loop: false
        }
    }
})