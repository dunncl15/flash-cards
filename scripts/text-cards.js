import fs from 'fs'
import Card from '../scripts/card'

class CardGenerator {
  constructor(filePath) {
    this.cards = this.splitText(filePath);
  }

  splitText(filePath) {
    const output = fs.readFileSync(filePath, 'utf8').trim().split('\n');
    return output.map((val)=> {
       let splitCard = val.split(',');
       let question = splitCard[0];
       let answer = splitCard[1];
       let newCard = new Card({question, answer});
       return newCard;
    });
  }

}

export default CardGenerator
