import UI from './UI.js';
import { pause } from './helpers.js';
import flickrTagSearch from './fetchFuncs.js';

class URLGenerator {
  constructor(theme = 'kittens') {
    this.theme = theme;
    this.pageIndex = 1;
    this.imgCount = 0;
    this.ui = new UI();
  }

  async *[Symbol.asyncIterator]() {
    while (true) {
      const pageData = await flickrTagSearch(this.theme, this.pageIndex);
      for (const url of pageData) {
        await pause(2);
        this.imgCount += 1;
        yield { url, imgCount: this.imgCount };
      }
      this.pageIndex += 1;
    }
  }
}

export default URLGenerator;
