const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'; // this looks for the word "elephant" in the array. 
})
console.log(foundAnimal) // this displays "7" because the word "elephant" is the item07 in the array
console.log(animals[foundAnimal])

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'; // this looks for the word(s) in the arrary that starts with the letter "s"
})
console.log(startsWithS); // this displayed '3' because the first word that starts with an 's' was the item03 in the array
console.log(animals[startsWithS]); // this used the function to display the word "seal" because it was item03
