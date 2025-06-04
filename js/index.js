import { initAccordion } from './accordion.js';
import { setupAccordionListeners } from './eventListeners.js'

document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded....");

    const projectList = [
        {link:'https://stocktracker-react.netlify.app/', name:'StockTracker (React)'},
        {link:'https://stocktracker-angular.netlify.app/', name:'StockTracker (Angular)'},
    ]

    initAccordion('accordion-container', projectList);
    setupAccordionListeners();
    
  });