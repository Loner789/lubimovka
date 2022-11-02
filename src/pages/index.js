// Imports
import './index.css';
import 'jquery';
import 'slick-carousel';
import { reviewsInitialCards, feedbackInitialCards, initialPhotos } from '../utils/initial-cards.js';
import {
  burgerButton,
  burgerPopup,
  rewiewsSliderControl,
  feedbackSliderControl,
  feedbackSlider,
  reviewSlider,
  photoGrid
} from '../utils/constants.js';

const $ = require( "jquery" );


// ---------------------- FUNCTIONS ----------------------
// Burger menu toggler
function toggleBurgerMenu() {
  burgerPopup.classList.toggle("popup-opened");
  burgerButton.classList.toggle("header__burger-menu_active");
}


// ---------------------- CREATING FUNCTIONS -------------------------
// Creation of Review-section card from template
function createReviewCard(data) {
  const { image, name, text } = data;
  const cardElement = document
    .querySelector('#reviews-slide')
    .content.querySelector('.reviews__slide-wrapper')
    .cloneNode(true);

  cardElement.querySelector('.reviews__slide-image').src = image;
  cardElement.querySelector('.reviews__slide-image').alt = name;
  cardElement.querySelector('.reviews__slide-text').textContent = text;

  return cardElement;
}

// Creation of Feedback-section card from template
function createFeedbackCard(data) {
  const { text, author} = data;
  const cardElement = document
    .querySelector('#feedback-slide')
    .content.querySelector('.feedback__slide-wrapper')
    .cloneNode(true);

  cardElement.querySelector('.feedback__slide-text').textContent = text;
  cardElement.querySelector('.feedback__slide-caption').textContent = author;

  return cardElement;
}

// Creation of photo for Photo-section
function createPhoto(data) {
  const { image, name } = data;
  const photo = document.createElement('img');

  // photo.src = `<%=require('${image}')%>`;
  photo.src = image;
  photo.alt = name;
  photo.classList.add('photo-grid__image');

  return photo;
}


// ---------------------- RENDER FUNCTION ----------------------
// Render function
function renderItems(item, block) {
  block.append(item);
}


// ---------------------- INSERTING FUNCTION ----------------------
// Inserting data from the initial arrays
function loadInitialData(data, createFunction, renderFunction, node) {
  data.forEach((item) => {
    const element = createFunction(item);
    renderFunction(element, node);
  });
}

// Show-hide block of pagination
function showPagination(element) {
  return element.length >= 4 && element.length <= 10 ? true : false;
}

loadInitialData(reviewsInitialCards, createReviewCard, renderItems, reviewSlider);
loadInitialData(feedbackInitialCards, createFeedbackCard, renderItems, feedbackSlider);
loadInitialData(initialPhotos, createPhoto, renderItems, photoGrid);


// ---------------------- SLIDERS PARAMETERS ----------------------
// Reviews Slider
$(".reviews__slider").slick({
  mobileFirst: true,
  infinite: false,
  centerMode: true,
  adaptiveHeight: true,
  dots: showPagination(reviewsInitialCards),
  dotsClass: "slider-control__dots",
  prevArrow: document.querySelector("#review-scal"),
  nextArrow: document.querySelector("#review-scar"),
  slidesToShow: 1,
  slidesToScroll: 1,
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

// Feedback Slider
$(".feedback__slider").slick({
  mobileFirst: true,
  infinite: false,
  dots: showPagination(feedbackInitialCards),
  dotsClass: "slider-control__dots",
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


// ---------------------- EVENT LISTENERS ----------------------
burgerButton.addEventListener("click", toggleBurgerMenu);