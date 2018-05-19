import UI from './UI.js';
import { pause } from './helpers.js';
import flickrTagSearch from './fetchFuncs.js';

class URLGenerator {
  constructor(theme = 'kitten') {
    this.theme = theme;
    this.pageIndex = 1;
    this.ui = new UI();
  }

  async * [Symbol.asyncIterator]() {
    while (true) {
      const pageData = await flickrTagSearch(this.theme, this.pageIndex);
      for (const url of pageData) {
        await pause(2);
        yield url;
      }
      this.pageIndex += 1;
    }
  }
}

export default URLGenerator;
