// We can replace the word "function" with the "=>"
/*this changes:
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList()
to this */
//you have to make the name of the function into a variable
const makeShoppingList = (item1 = 'milk', item2 = 'bread', item3 = 'eggs') => { 
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList()
