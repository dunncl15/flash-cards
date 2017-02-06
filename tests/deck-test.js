import { assert } from 'chai';
import Deck from '../scripts/deck';
import Card from '../scripts/card';

describe('deck class', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(Deck);
  });

  it('should start with an empty array of cards', ()=> {
    let deck = new Deck([]);
    assert.deepEqual(deck.cards, []);
  });

  it('should add a new card to the deck', ()=> {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let deck = new Deck([]);
    assert.equal(deck.count(), 0);
    deck.addCard(card1);
    assert.equal(deck.count(), 1);
  });

  it('should add multiple cards to the deck', ()=> {
    let card1 = new Card("What is the capital of Alaska?", "Juneau");
    let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars");
    let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west");
    let deck = new Deck([]);
    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);
    assert.equal(deck.count(), 3);
  });
});
