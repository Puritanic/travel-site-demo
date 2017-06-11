
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/scrollReveal';
import $ from 'jquery';
import FixedHeader from './modules/FixedHeader';

const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '75%');
const fixedHeader = new FixedHeader();