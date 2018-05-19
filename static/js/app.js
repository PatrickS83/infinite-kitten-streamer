import UI from './UI.js';
import URLGenerator from './URLGenerator.js';

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
      if (!input.value) return;
      this.createNewStream(input.value);
      input.value = '';
      input.focus();
    });
  }

  async createNewStream(theme = 'kittens') {
    const displayCard = this.ui.createCard(theme);
    this.ui.appendCard(displayCard);
    const urlGenerator = new URLGenerator(theme);
    for await (const url of urlGenerator) {
      this.ui.changeImg(url, theme);
    }
  }
}

const app = new App();
