const concept = ['arrays', 'can', 'be', 'mutated']; //original array

function changeArr(arr){ // function that has the parameter of "arr" changes the "item03" to 'MUTATED'
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); // prints "[ 'arrays', 'can', 'be', 'MUTATED' ]"

function removeElement(newArr) { //function that has the parameter of "newArr" deletes mthe last item using "pop"
newArr.pop()
}
removeElement(concept);
console.log(concept); //prints "[ 'arrays', 'can', 'be' ]"
