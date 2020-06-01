const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number'; /*this will filter out everything but numbers*/
});

console.log(onlyNumbers);
/* this will display
[ 5, 3.14, 100 ]
*/
// this is my attampt
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => {
  return number < 250; //this filter out every number that was bigger than 250
})
 console.log(smallNumbers); // this displayed [200, 3.14, 7, 13]

//this is my attempt
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7; // this filters out all of the words with less than 7 letters in them
})
console.log(longFavoriteWords); //this should display ["nostalgia", "hyperbole", "esoteric"]
