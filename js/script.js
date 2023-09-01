$('#slider-1.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    animateOut: 'fadeOut',
    autoplayTimeout:4000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('#slider-2.owl-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:true,
    autoplayTimeout:7000,
    dots:false,
    autoplay:true,
    smartSpeed: 1300,
    navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$("#i").click(function(){
    $("nav").slideToggle(300)
})