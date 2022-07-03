$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  autoplaySpeed: 800,
  autoplay:.1,
  pauseOnHover: true,
  margin:10,
  dots: false,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

var owl = $('.Custom-slider');
owl.owlCarousel();
// Go to the next item
$('.Nxt-Btn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.Prv-Btn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [600]);
});

$(document).ready(function() {
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});


// couter for loan project js


