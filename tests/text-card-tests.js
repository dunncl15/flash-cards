import { assert, expect } from 'chai';
import CardGenerator from '../scripts/text-cards'
import Card from '../scripts/text-cards'


describe('card generator class', ()=> {

  it('should return an array of cards from the text file', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards).to.be.a('array');
  });

  it('should have four cards in the array', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards.length).to.equal(4);
  });

  it('should contain card objects', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards[0]).to.be.a('object');
  })

  it('should be the first card in the array', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards[0]).to.deep.equal({question: 'What is 5 + 5?', answer: '10'});
  });

  it('should be the second card in the array', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards[1]).to.deep.equal({question: 'What is yung-jhun\'s favorite ice cream flavor?', answer: 'vanilla'});
  });

  it('should be the third card in the array', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards[2]).to.deep.equal({question: 'What is alter-nate\'s middle name?', answer: 'nobody knows'});
  });

  it('should be the fourth card in the array', ()=> {
    let cardGenerator = new CardGenerator('./scripts/cards.txt');

    expect(cardGenerator.cards[3]).to.deep.equal({question: 'What cardboard cutout lives at Turing?', answer: 'Pat Whey'});
  });
});
