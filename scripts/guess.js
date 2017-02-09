
class Guess {
  constructor({response, card}) {
    this.response = response;
    this.card = card;
  }

  isCorrect() {
    return this.response === this.card.answer ? true : false;
  }

  feedback() {
    return this.isCorrect() ? 'Correct!' : 'Incorrect.'
  }
}

export default Guess;
