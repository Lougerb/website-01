"use strict";

// Variables
export const carouselSlider = document.getElementById("carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-img img");
let caroulselCounter = 4;
const imgSize = carouselImages[0].clientWidth + 20;

// Starting Carousel
carouselSlider.style.transform = `translateX(${-imgSize * caroulselCounter}px)`;

// Buttons
export const nextBtnFunc = () => {
  // nextBtn.addEventListener("click", () => {
  if (caroulselCounter >= carouselImages.length - 1) return;
  carouselSlider.style.transition = `transform 0.1s ease-in-out`;
  caroulselCounter++;
  carouselSlider.style.transform = `translateX(${
    -imgSize * caroulselCounter
  }px)`;
  // });
};
export const prevBtnFunc = () => {
  // prevBtn.addEventListener("click", () => {
  if (caroulselCounter <= 0) return;
  carouselSlider.style.transition = `transform 0.1s ease-in-out`;
  caroulselCounter--;
  carouselSlider.style.transform = `translateX(${
    -imgSize * caroulselCounter
  }px)`;
  // });
};

// Loop
export const carouselFunc = () => {
  // carousel.addEventListener("transitionend", () => {
  if (carouselImages[caroulselCounter].id === "lastImg") {
    carouselSlider.style.transition = "none";
    caroulselCounter = carouselImages.length - 3;
    carouselSlider.style.transform = `translateX(${
      -imgSize * caroulselCounter
    }px)`;
  }
  if (carouselImages[caroulselCounter].id === "firstImg") {
    carouselSlider.style.transition = "none";
    caroulselCounter = carouselImages.length - caroulselCounter;
    carouselSlider.style.transform = `translateX(${
      -imgSize * caroulselCounter
    }px)`;
  }
  // });
};
