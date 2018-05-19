class UI {
  constructor() {
    this.elements = {
      cardContainer: document.querySelector('.cardContainer')
    };
  }

  createCard() {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="col s4">
      <div class="card">
          <div class="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg">
              <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
              <p>Enter your theme in the input field!</p>
          </div>
          <div class="card-action">
              <div class="input-field col s12">
                <input id="themeInput" type="text">
                <label for="themeInput">Enter Theme</label>
              </div>
              <button class="waves-effect waves-light btn">Start Picture Stream!</a>
          </div>
      </div>
    </div>
    `;
    return card;
  }

  appendCard(content, node = this.elements.cardContainer) {
    node.appendChild(content);
  }

  changeImg(url) {
    const cardImage = document.querySelector('.card-image img');
    cardImage.src = url;
  }
}

export default UI;
