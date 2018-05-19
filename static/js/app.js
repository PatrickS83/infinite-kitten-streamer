import UI from './UI.js';
import Card from './Card.js';

class App {
  constructor() {
    this.ui = new UI();
    this.init();
  }

  init() {
    this.addButtonListener();
  }

  addButtonListener() {
    const button = document.querySelector('#startButton');
    const input = document.querySelector('#themeInput');
    button.addEventListener('click', () => {
      this.generate(input.value);
      input.value = '';
      input.focus();
    });
  }

  async generate(theme = 'kittens') {
    const displayCard = this.ui.createCard(theme);
    this.ui.appendCard(displayCard);
    const card = new Card(theme);
    for await (const url of card) {
      this.ui.changeImg(url, theme);
    }
  }
}

const app = new App();
