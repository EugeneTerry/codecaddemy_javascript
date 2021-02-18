const krogerList = ['hotdogs', 'buns', 'ketsup', 'mustard'];
krogerList [3] = 'mayo';
console.log(krogerList);
console.log(krogerList.length);
krogerList.push('pickles', 'chili'); //adds pickles and chili onto the end
console.log(krogerList);
console.log(krogerList.length);
const removed = krogerList.pop(); //assigns a variable with the removed item from the back (.pop removes last item)
console.log(krogerList);
console.log(krogerList.length);
console.log(`${removed} was removed from the array`);
