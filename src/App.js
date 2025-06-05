import { initAccordion } from './components/accordion.js';
import { setupAccordionListeners } from './eventListeners.js';
import { Header } from './components/Header.js';


export function App() {

    const container = document.createElement('div');
    container.className = "page-container";

    const content = document.createElement('div');
    content.className = "page-content";

    content.appendChild(Header());

    container.appendChild(content);

    document.addEventListener('DOMContentLoaded', () => {

        const projectList = [
        {link:'https://stocktracker-react.netlify.app/', name:'StockTracker (React)'},
        {link:'https://stocktracker-angular.netlify.app/', name:'StockTracker (Angular)'},
    ]

    container.appendChild(initAccordion(projectList));
    setupAccordionListeners();
})

    return container;

}


            // <nav class="nav">
            //     <div id="accordion-container"></div>
            // </nav>
            // <main class="main_container">
                
            // </main>
