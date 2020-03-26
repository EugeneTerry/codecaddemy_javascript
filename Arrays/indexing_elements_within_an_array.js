const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
const pastaIndex = groceryList.indexOf('pasta'); //index identifies the item# of an element
console.log(pastaIndex); //this printed "4" because "pasta" is "item04" in the array
