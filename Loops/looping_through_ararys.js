const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) { // this goes through the items in asending order
  console.log('I would love to visit ' + vacationSpots[i]);
/* prints
"I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum"
*/

for (let countUp = 1; countUp <11; countUp ++) {
    console.log(countUp); // this counts up from 1 to 10 by 1's
}

for (let countDown = 10; countDown >0; countDown --) {
    console.log(countDown); // this counts down from 10 to 1 by 1's
}
  
const liquorList = ['Jack', 'Titos', 'Jose', 'Crown'];
const herLiquorList = ['Rose', 'Henessee', 'Chris', 'Crown'];
console.log(`My Array List From Last to First`);
console.log(liquorList)

console.log(`My List From First to Last`);
for (let i = 0; i < liquorList.length; i++) {
    console.log(liquorList[i]);
}
console.log(`My List From Last to First`);
for (let i = liquorList.length -1; i >= 0; i--) {
    console.log(liquorList[i]);
}
