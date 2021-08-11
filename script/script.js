// "use strict";
import * as carousel from "./carousel.js";

const prevBtn = document.getElementById("c-prev");
const nextBtn = document.getElementById("c-next");

prevBtn.addEventListener("click", carousel.prevBtnFunc);
nextBtn.addEventListener("click", carousel.nextBtnFunc);

carousel.carouselSlider.addEventListener(
  "transitionend",
  carousel.carouselFunc
);
