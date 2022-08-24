import './style.css';
import Library from './modules/library.js';

const library = new Library();

// SCORE ELEMENT
const listOfScoresElement = document.getElementById('scoresTable');

const CreateScoreItemHTML = (id, name, score) => {
  const divContainer = document.createElement('div');
  divContainer.id = `score-${id}`;
  divContainer.classList.add('scores-list');
  divContainer.innerText = `${name}: ${score}`;
  return divContainer;
};

function AddScoreToContainerElement(score) {
  listOfScoresElement.appendChild(CreateScoreItemHTML(score.id, score.name, score.score));
}

function createScoreListing() {
  library.scores.forEach((score) => {
    AddScoreToContainerElement(score);
  });
}

// INITS
function init() {
  library.createScoreAndAdd('Carlos', 100);
  library.createScoreAndAdd('John', 20);
  library.createScoreAndAdd('Joanne', 50);
  library.createScoreAndAdd('Richard', 78);
  library.createScoreAndAdd('Mary', 125);
  library.createScoreAndAdd('Lillie', 77);
  library.createScoreAndAdd('Peter', 42);

  createScoreListing();
}

window.addEventListener('load', init);
