const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => { 
// this checks to see if there are "some" items that have less than 6 objects(letters) 
  return word.length < 6; 
  // this should give a "true" because there are "some" items in the array that has less than 6 letters in it
}));
const interestingWords = words.filter(word => {
  return word.length > 5; 
  // this created an array that only has the words that have more then 5 letters in them from the original array
})
 console.log(interestingWords.every((word) => {
 //this checks to see if "every" item in teh array has more than 5 letters in it
  return word.length > 5;
  //this should give a "true" because "every" item in the new array has more than 5 letters in i
 } ));
console.log(interestingWords);
//this should display "["unique", "uncanny", "oxymoron"]"
