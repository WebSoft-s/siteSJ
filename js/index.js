import SlideNav from './slide.js';
import menuMobile from './menuMobile.js';
import cardWhats from './cardWhats.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
