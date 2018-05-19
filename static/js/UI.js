class UI {
  constructor() {
    this.elements = {
      cardContainer: document.querySelector('.cardContainer')
    };
  }

  createCard(theme = 'kittens') {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="col s4">
      <div class="card">
        <div class="card-image">
            <img class=${theme} src="../static/img/spinner.svg">
            <span class="card-title">${theme} Stream</span>
        </div>
        <div class="card-content">
            <p>Now Streaming: ${theme}!</p>
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
}

export default UI;
