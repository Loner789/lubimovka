// Решние проблемы с пассивными слушателями jQuery
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};
jQuery.event.special.touchmove = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchmove", handle, { passive: false });
    } else {
      this.addEventListener("touchmove", handle, { passive: true });
    }
  }
};

// КОНСТАНТЫ:
const sliderControl = document.querySelector(".slider-control"); // Блок с кнопками управления слайдером

// ПАРАМЕТРЫ СЛАЙДЕРОВ:
// Слайдер блока "Reviews"
$(".center").slick({
  mobileFirst: true,
  centerMode: true,
  infinite: false,
  dots: true,
  dotsClass: "slider__dots",
  prevArrow: document.querySelector("#review-scal"),
  nextArrow: document.querySelector("#review-scar"),
  slidesToShow: 1,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 767,
      settings: {
        appendDots: $(sliderControl),
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1023,
      settings: {
        appendDots: $(sliderControl),
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 1279,
      settings: {
        appendDots: $(sliderControl),
        centerPadding: "362px",
      },
    },
  ],
});