class UI {
  constructor() {
    this.elements = {
      cardContainer: document.querySelector('.cardContainer'),
      streamButton: document.querySelector('#startButton'),
      streamInput: document.querySelector('#themeInput')
    };
  }

  createCard(theme = 'kittens') {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="col s4">
      <div class="card">
        <div class="card-image">
            <img class=${theme} src="./static/img/spinner.svg">
            <span class="card-title">${theme} Stream</span>
        </div>
        <div class="card-content">
            <p>Now Streaming: ${theme}!</p>
            <p>Images Streamed: <span data-imgCount=${theme}>0</span></p>
        </div>
      </div>
    </div>`;
    return card;
  }

  appendCard(content, node = this.elements.cardContainer) {
    node.appendChild(content);
  }

  changeImg(url, theme) {
    const cardImage = document.querySelector(`.${theme}`);
    cardImage.src = url;
  }

  renderImgCount(count, theme) {
    const imgCounter = document.querySelector(`[data-imgCount=${theme}]`);
    imgCounter.innerHTML = count;
  }
}

export default UI;
