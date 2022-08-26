import './style.css';

import DOM from './modules/dom.js';

const dom = new DOM();

// INITS
const init = () => {
  dom.addScoreButtonListener(); // Listener for Submit Form
  dom.refreshListButtonListener(0); // Listener for Refresh Button
  dom.refreshScoresList(0); // Load the HTML list
};

window.addEventListener('load', init);