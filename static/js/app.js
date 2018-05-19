import UI from './UI.js';
import Card from './Card.js';

class App {
  constructor() {
    this.ui = new UI();
    this.init();
  }

  init() {
    const initialCard = this.ui.createCard();
    this.ui.appendCard(initialCard);
  }

  async generate() {
    const card = new Card();
    for await (const url of card) {
      this.ui.changeImg(url);
    }
  }
}

const app = new App();
app.generate();
