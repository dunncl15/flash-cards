class Deck {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  count() {
    return this.cards.length;
  }
}

export default Deck;
