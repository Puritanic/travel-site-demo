
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/scrollReveal.js';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '75%');