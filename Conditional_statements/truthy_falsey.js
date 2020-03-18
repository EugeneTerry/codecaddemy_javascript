let wordCount = 2; // the '2' is considered a truthy string but '0' would be a falsey string

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//this will display "Great! You've started your work!"

let favoritePhrase = ''; // the ' ' is considered a falsey string

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// this will display "This string is definitely empty."
