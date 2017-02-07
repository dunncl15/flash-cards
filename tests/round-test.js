import { assert, expect } from 'chai';
import Round from '../scripts/round';
import Deck from '../scripts/deck';
import Card from '../scripts/card';

describe('round class', ()=> {
  it('should return an object', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);
    assert.isObject(round.deck);
  });

  it('should return an object with the key: "cards"', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);
    expect(round.deck).to.include.keys('cards');
  });

  it('the key: "cards" should have a value of an array', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);
    expect(round.deck).to.have.property('cards').that.is.a('array');
  });

  it('the array should contain card1 at index 0', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);
    expect(round.deck).to.have.property('cards').that.is.an('array').with.deep.property('[0]').that.deep.equals(card1);
  });

  it('the array should contain card2 at index 1', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);
    expect(round.deck).to.have.property('cards').that.is.an('array').with.deep.property('[1]').that.deep.equals(card2);
  });
});
