import { assert } from 'chai';
import Card from '../scripts/card';

describe('card class', ()=> {
  it('should be a function', ()=> {
    assert.isFunction(Card);
  });

  it('should be able to take a question', ()=> {
    var card = new Card({ question: 'What is the capital of Alaska'});
    assert.equal(card.question, 'What is the capital of Alaska');
  });

  it('should have an answer to the question', ()=> {
    var card = new Card({answer: 'Juneau'});
    assert.equal(card.answer, 'Juneau');
  });
});
