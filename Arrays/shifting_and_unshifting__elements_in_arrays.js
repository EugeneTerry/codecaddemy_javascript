const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); //takes the first element out
console.log(groceryList);
/* prints
"[ 'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]"
  */
groceryList.unshift('popcorn'); // adds 'popcorn' to the front of the array
console.log(groceryList);
/* prints
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
  */
