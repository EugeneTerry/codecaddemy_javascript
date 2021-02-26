console.log(`/////////////////THIS IS CODE FROM itera02.js///////////////`)
//const family = ['Trinity', 'Remle', 'Gabrielle', 'Des'];
const foundLetterT = family.findIndex(family => {
    return family[0] === 'G'; // this finds what item location has the letter 'G'  in the first spot [0].
});
console.log(foundLetterT);

const foundMoe = family.findIndex(family => {
    return family === 'Remle';
})
console.log(foundMoe);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

const lessThanSixTrue = words.some(words => { //this one gives a true or false outcome for a given parameters
    return words.length < 6;
})
console.log(lessThanSixTrue); //true

console.log(words.some((word) => {// this is the same code just a little cleaner
return word.length < 6;
})); //true

const makeArrayWith = words.filter(words => { // this makes an array that has the items that meet the parameters
    return words.length >= 6;
})
console.log(makeArrayWith); // ["unique", "uncanny", "oxymoron"]

console.log(family.every((members) => {
    return members.length > 1;
}));