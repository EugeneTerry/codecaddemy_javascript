console.log(`/////////////////THIS IS CODE FROM itera03.js///////////////`)
const classSize = [12, 17, 15, 7];
const sumClasses = classSize.reduce((firstNum, currentNum) => { // this line looks at the first item it goes throuogh and then looks at the second
    return firstNum + currentNum; // this just does math to the two values it creates 
});
console.log(`The average of ${classSize.join(', ')} is ${sumClasses/classSize.length}.`); // this just takes the return values and divides them by the number of items using ".lenght"

console.log(family.every((kid) => { // this is seeing if everything is the same in the array
    return kid.length > 5; // this says what the same is
}));
