const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

/* this will display
[ 1, 4, 9, 16, 25 ]
*/

/* here is my attempt*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  return animal[0]; /* this took the first letter from each word in the array */
})

console.log(secretMessage.join(''));
/* this printed out
HelloWorld
*/

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100; /* this divided each number in the array by 100 */
  });
  console.log(smallNumbers);
/* this diplayed 
[ 1, 2, 3, 4, 5 ]
*/
