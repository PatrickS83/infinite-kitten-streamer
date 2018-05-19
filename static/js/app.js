import UI from './UI.js';
import URLGenerator from './URLGenerator.js';

class App {
  constructor() {
    this.ui = new UI();
    this.currentStreaming = [];
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

  checkDuplicates(theme) {
    return this.currentStreaming.filter(item => item.toLowerCase().startsWith(theme.toLowerCase()))
      .length;
  }

  async createNewStream(theme = 'kittens') {
    const duplicates = this.checkDuplicates(theme);
    let duplicatedTheme = theme;
    if (duplicates) duplicatedTheme += duplicates + 1;
    this.currentStreaming.push(duplicatedTheme);

    const displayCard = this.ui.createCard(duplicatedTheme);
    this.ui.appendCard(displayCard);

    const urlGenerator = new URLGenerator(theme);
    for await (const url of urlGenerator) {
      this.ui.changeImg(url, duplicatedTheme);
    }
  }
}

const app = new App();
