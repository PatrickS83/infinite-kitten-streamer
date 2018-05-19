import UI from './UI.js';
import { delay } from './helpers.js';
import flickrTagSearch from './fetchFuncs.js';

class Card {
  constructor(theme = 'kitten') {
    this.theme = theme;
    this.pageIndex = 1;
    this.ui = new UI();
  }

  async * [Symbol.asyncIterator]() {
    let pageIndex = 1;
    while (true) {
      const pageData = await flickrTagSearch(this.theme, pageIndex);
      for (const url of pageData) {
        await delay(2);
        yield url;
      }
      pageIndex += 1;
    }
  }
}

export default Card;
