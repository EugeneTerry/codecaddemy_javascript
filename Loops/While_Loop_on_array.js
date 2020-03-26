const cards = ['diamond', 'spade', 'heart', 'club'];

let  currentCard
while (currentCard !== 'spade') { // this looks for what's NOT "spade"
  currentCard = cards[Math.floor(Math.random() * 4)] // this calls a random item from the array
  console.log(currentCard)
}
// it will loop and print all the items at random until it prints "spade" then it stops.
/* print
heart
club
spade
-----------
heart
club
diamond
heart
diamond
diamond
spade
----------
heart
diamond
spade
---------
and so on
*/
