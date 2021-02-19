const krogerList = ['hotdogs', 'buns', 'ketsup', 'mustard'];
krogerList [3] = 'mayo';
console.log(krogerList);
console.log(krogerList.length);
krogerList.push('pickles', 'chili'); //adds pickles and chili onto the end
console.log(krogerList);
const removed = krogerList.pop(); //assigns a variable with the removed item from the back (.pop removes last item)
console.log(krogerList);
console.log(`${removed} was removed from the array`);
krogerList.unshift('fries');
console.log(krogerList);
console.log(`${krogerList [0]} was added to the beginning of the array`);
console.log(krogerList.join(' - ')); //with .join added, " - " were placed in between each item in the array
