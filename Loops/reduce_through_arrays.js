const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator); //this displays the first number
  console.log('The value of currentValue: ', currentValue); // this displays the next number to be added to the first
  return accumulator + currentValue // this takes the first item in the array and adds it to the second and takes tha answer and adds it to the next an so on
  
}/* a number can be added here to give another value added*/ ); 
console.log(newSum); // this displays '16' because 1+3+5+7=16

/* the entire dipaly should look like
The value of accumulator:  1
The value of currentValue:  3
The value of accumulator:  4
The value of currentValue:  5
The value of accumulator:  9
The value of currentValue:  7
16
*/
