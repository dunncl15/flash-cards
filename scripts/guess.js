
class Guess {
  constructor({response, card}) {
    this.response = response;
    this.card = card;
  }

  isCorrect() {
    if (this.response === this.card.answer) {
      return true;
    } else {
      return false;
    }
  }

  feedback() {
    if (this.response === this.card.answer) {
      return 'Correct!';
    } else {
      return 'Incorrect.';
    }
  }
}

export default Guess;
