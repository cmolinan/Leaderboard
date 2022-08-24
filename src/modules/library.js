import Scores from './scores.js';

class Library {
  constructor(scores = [], nextId = 0) {
    this.scores = scores;
    this.nextId = nextId;
  }

  add = (score) => {
    if (score instanceof Scores) {
      score.id = this.nextId;
      this.scores.push(score);
      this.nextId += 1;
      return score;
    }
    throw Error(`${score} is not instance of Scores`);
  }

  createScoreAndAdd = (name, score) => {
    const newScore = new Scores(name, score);
    this.add(newScore);
    return newScore;
  };
}

export default Library;