// fetches from Flickr API and returns an array of URLS
// (String, String) ---> Array(Strings)
function flickrTagSearch(tag = 'kittens', page = '1') {
  const apiKey = 'b1a90a68a42acb335863b1fa18f0329e';
  return fetch('https://api.flickr.com/services/rest/' +
      '?method=flickr.photos.search' +
      `&api_key=${apiKey}` +
      `&page=${page}` +
      `&tags=${tag}` +
      '&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(body => body.photos.photo)
    .then(photos =>
      photos.map(photo =>
          `https://farm${photo.farm}.staticflickr.com/` +
          `${photo.server}/${photo.id}_${photo.secret}_q.jpg`));
}

export default flickrTagSearch;
