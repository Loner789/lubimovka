// Решние проблемы с пассивными слушателями jQuery
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
      this.addEventListener('touchend', handle, { passive: !ns.includes('noPreventDefault') });
  }
};

jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchmove", handle, { passive: false });
    } else {
      this.addEventListener("touchmove", handle, { passive: true });
    }
  },
};

// КОНСТАНТЫ:
const rewiewsSliderControl = document.querySelector("#rewiews-sc"); // Блок с кнопками управления слайдером Reviews
const feedbackSliderControl = document.querySelector("#feedback-sc"); // Блок с кнопками управления слайдером Feedback

// ПАРАМЕТРЫ СЛАЙДЕРОВ:
// Слайдер блока "Reviews"
$(".reviews__slider").slick({
  mobileFirst: true,
  centerMode: true,
  adaptiveHeight: true,
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
        adaptiveHeight: false,
        appendDots: $(rewiewsSliderControl),
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1023,
      settings: {
        adaptiveHeight: false,
        appendDots: $(rewiewsSliderControl),
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 1279,
      settings: {
        adaptiveHeight: false,
        appendDots: $(rewiewsSliderControl),
        centerPadding: "346px",
      },
    },
  ],
});

// Слайдер блока "Feedback"
$(".feedback__slider").slick({
  mobileFirst: true,
  infinite: false,
  dots: true,
  dotsClass: "slider__dots",
  prevArrow: document.querySelector("#feedback-scal"),
  nextArrow: document.querySelector("#feedback-scar"),
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
         slidesToScroll: 1,
        appendDots: $(feedbackSliderControl),
      },
    },
    {
      breakpoint: 1023,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
        appendDots: $(feedbackSliderControl),
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: $(feedbackSliderControl),
      },
    },
  ],
});
