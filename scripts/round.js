import Guess from './guess';

class Round {
  constructor({ deck }) {
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;
  }

  currentCard() {
    let currentCard = this.deck.cards.shift();
    return currentCard;
  }

  recordGuess(userGuess) {
    let guess = new Guess({response: userGuess, card: this.currentCard()});
    this.guesses.push(guess);
    if (guess.feedback() === "Correct!") {
      this.numberCorrect++
    }
    return guess;
  }

  percentCorrect() {
    return this.numberCorrect / this.guesses.length * 100;
  }
}

export default Round;
