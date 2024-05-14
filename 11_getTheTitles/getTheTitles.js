// SET titles to empty array
// FOR each book in books
//  PUSH book.title to titles
// END FOR

const getTheTitles = function(books) {
  // let titles = [];
  // books.forEach(book => titles.push(book.title));
  // return titles;

  // Simpler version using Array map()
  return books.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
