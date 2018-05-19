class UI {
  constructor() {
    this.elements = {
      cardContainer: document.querySelector('.cardContainer')
    };
    this.init();
  }

  init() {
    const initialCard = this.createCard();
    this.appendCard(initialCard);
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
              <input type="text"></input>
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
}

export default UI;
