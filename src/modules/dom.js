import Library from './library.js';
import ApiCalls from './apiCalls.js';

class DOM {
  constructor() {
    this.library = new Library();
    this.apiCalls = new ApiCalls();
  }

  refreshListButton = document.getElementById('refreshBtn');

  listOfScoresElement = document.getElementById('scoresTable');

  addScoreForm = document.getElementById('submitBtn');

  nameInput = document.getElementById('name');

  scoreInput = document.getElementById('score');

  // add one item to the HTML list
  createScoreItemHTML = (id, name, score) => {
    const divContainer = document.createElement('div');
    divContainer.id = `score-${id}`;
    divContainer.classList.add('scores-list');
    divContainer.innerText = `${name}: ${score}`;
    return divContainer;
  };

  addScoreToContainerElement = (score) => {
    this.listOfScoresElement.appendChild(this.createScoreItemHTML(
      score.id, score.name, score.score,
    ));
  }

  createScoreListing = () => {
    this.library.scores.forEach((score) => {
      this.addScoreToContainerElement(score);
    });
  }

  // erase all the HTML list
  removeScoreList = () => {
    const list = document.getElementsByClassName('scores-list');
    const listL = list.length;
    for (let i = 0; i < listL; i += 1) {
      document.getElementById('scoresTable').removeChild(list[0]);
    }
  };

  sortArray = (data) => data.sort((a, b) => b.score - a.score);

  // Load the HTML list
  refreshScoresList = (e) => {
    if (e !== 0) e.preventDefault();
    this.removeScoreList();
    this.library.initializeScores();
    this.apiCalls.getScores()
      .then((data) => {
        const dataSort = this.sortArray(data.result);
        dataSort.forEach((data1) => {
          this.library.createScoreAndAdd(data1.user, data1.score);
        });
        this.createScoreListing();
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // TO DO: Notificator
        // console.log(error.name, '--ERROR');
      });
  };

  addNewScore = (e) => {
    e.preventDefault();
    if (this.nameInput.value !== '' && this.scoreInput.value !== '') {
      this.apiCalls.postScore(this.nameInput.value, this.scoreInput.value)
        .then(() => {
          this.refreshScoresList(0);
          this.nameInput.value = '';
          this.scoreInput.value = '';
          this.nameInput.focus = true;
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // TO DO -- notificator
          // console.log(error.name, '--ERROR');
        });
    }
  }

  addScoreButtonListener = () => {
    this.addScoreForm.addEventListener('click', this.addNewScore);
  };

  refreshListButtonListener = () => {
    this.refreshListButton.addEventListener('click', this.refreshScoresList);
  };
}

export default DOM;
