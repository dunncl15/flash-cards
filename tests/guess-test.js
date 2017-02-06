import { assert } from 'chai';
import Guess from '../scripts/guess';
import Card from '../scripts/card';


describe('guess class', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(Guess);
  });

  it('should return an object with the cards answer and question', ()=> {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let guess = new Guess({response: 'Juneau', card});
    assert.isObject(guess.card, {answer: 'Juneau', question: 'What is the capital of Alaska?'});
  });

  it('should check the users response', ()=> {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let guess = new Guess({response: 'Anchorage', card});
    assert.equal(guess.response, 'Anchorage');
  });

  it('should know if the users response is incorrect', ()=> {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let guess = new Guess({response: 'Anchorage', card});
    assert.equal(guess.isCorrect(), false);
  });

  it('should know if the users response is correct', ()=> {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let guess = new Guess({response: 'Juneau', card});
    assert.equal(guess.isCorrect(), true);
  });

  it('should give the user feedback positive feedback for a correct response', ()=> {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let guess = new Guess({response: 'Juneau', card});
    assert.equal(guess.feedback(), 'Correct!');
  });

  it('should give the user feedback negative feedback for an incorrect response', ()=> {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'});
    let guess = new Guess({response: 'Anchorage', card});
    assert.equal(guess.feedback(), 'Incorrect.');
  });

});
