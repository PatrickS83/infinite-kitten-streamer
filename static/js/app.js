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
    const { streamInput, streamButton } = this.ui.elements;
    streamButton.addEventListener('click', () => {
      if (!streamInput.value) return;
      this.createNewStream(streamInput.value);
      streamInput.value = '';
      streamInput.focus();
    });
  }

  // checks if a Stream with the current theme is already running
  // (String) --> Boolean
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
