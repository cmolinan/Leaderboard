import './style.css';

import DOM from './modules/dom.js';

const dom = new DOM();

const addScoreButtonListener = () => {
  dom.addScoreForm.addEventListener('click', dom.addNewScore);
};

const refreshListButtonListener = () => {
  dom.refreshListButton.addEventListener('click', dom.refreshScoresList);
};

// INITS
function init() {
  addScoreButtonListener(); // Listener for Submit Form
  refreshListButtonListener(0); // Listener for Refresh Button
  dom.refreshScoresList(0); // Load the HTML list
}

window.addEventListener('load', init);