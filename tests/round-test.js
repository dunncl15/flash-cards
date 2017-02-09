import { assert, expect } from 'chai';
import Round from '../scripts/round';
import Deck from '../scripts/deck';
import Guess from '../scripts/guess'
import Card from '../scripts/card';
import 'locus'

describe('round class', ()=> {
  it('should return an object', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});

    assert.isObject(round.deck);
  });

  it('should return an object with the key: "cards"', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    expect(round.deck).to.include.keys('cards');
  });

  it('the key: "cards" should have a value of an array', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    expect(round.deck).to.have.property('cards').that.is.a('array');
  });

  it('the array should contain card1 at index 0', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    expect(round.deck).to.have.property('cards').that.is.an('array').with.deep.property('[0]').that.deep.equals(card1);
  });

  it('the array should contain card2 at index 1', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    expect(round.deck).to.have.property('cards').that.is.an('array').with.deep.property('[1]').that.deep.equals(card2);
  });

  it('should have a property of guesses that is an empty array by default', ()=> {
    let deck = new Deck();
    let round = new Round({deck});
    assert.deepEqual(round.guesses, []);
  });

  it('should show the first card in the cards array', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});

    assert.deepEqual(round.currentCard(), {question: "What is the capital of Alaska?", answer: "Juneau"});
  });

  it('should have a method called recordGuess that returns a new guess object', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let deck = new Deck();
    deck.addCard(card1);
    let round = new Round({deck});
    let guess = new Guess({response: 'Juneau', card: card1})

    assert.deepEqual(round.recordGuess('Juneau'), {response: 'Juneau', card: card1})
  })

  it('should add card to guesses array if users guess is correct', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let deck = new Deck();
    deck.addCard(card1);
    let round = new Round({deck});
    let guess = new Guess({response: 'Juneau', card: card1})
    round.recordGuess('Juneau');

    assert.equal(round.guesses.length, 1)
  })

  it('should display correct if userGuess matches the answer', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let deck = new Deck();
    deck.addCard(card1);
    let round = new Round({deck});
    let guess = new Guess({response: 'Juneau', card: card1})
    round.recordGuess('Juneau');

    assert.equal(round.guesses[0].feedback(), 'Correct!');
  })

  it('should increase the numberCorrect if userGuess matches the answer', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let deck = new Deck();
    deck.addCard(card1);
    let round = new Round({deck});
    // let guess = new Guess({response: 'Juneau', card: card1})
    round.recordGuess('Juneau');

    assert.equal(round.numberCorrect, 1);
  })

  it('should display incorrect if userGuess does not match the answer', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let deck = new Deck();
    deck.addCard(card1);
    let round = new Round({deck});
    let guess = new Guess({response: 'Juneau', card: card1})
    round.recordGuess('Fail!');

    assert.equal(round.guesses[0].feedback(), 'Incorrect.');
  })

  it('should show the second card in the cards array', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    round.currentCard();

    assert.deepEqual(round.currentCard(), {question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
  });

  it('should check the length of the guesses array after the users second guess', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    round.recordGuess('Juneau')
    round.recordGuess('Saturn');

    assert.equal(round.guesses.length, 2);
  });

  it('should display feedback for the users second guess', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    round.recordGuess('Juneau');
    round.recordGuess('Saturn');

    assert.equal(round.guesses[1].feedback(), 'Incorrect.');
  })

  it('should check the number correct at the end of the round', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    round.recordGuess('Juneau');
    round.recordGuess('Saturn');
    assert.equal(round.numberCorrect, 1);
  })

  it('should have 50% correct at the end of the round', ()=> {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let deck = new Deck();
    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round({deck});
    round.recordGuess('Juneau');
    round.recordGuess('Saturn');

    assert.equal(round.percentCorrect(), 50);
  })
});
