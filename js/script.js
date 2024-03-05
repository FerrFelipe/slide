import Slide from "./slide.js";
const slide = new Slide(".slide", ".slideWrapper");
slide.init();
slide.changeSlide(4);
slide.activePrevSlide();
