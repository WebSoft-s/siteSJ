import SlideNav from './slide.js';
import menuMobile from './menuMobile.js';
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
