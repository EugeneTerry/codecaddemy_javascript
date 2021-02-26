console.log(`/////////////////THIS IS CODE FROM itera01.js///////////////`)

const family = ['Trinity', 'Remle', 'Gabrielle', 'Des'];
family.forEach(family => {
    console.log(`${family} is one of my sweet children.`); // this goes through each item and places it in the console statement
});

const myPrices = [2, 4, 6, 8, 10, 12];

const buyTwo = myPrices.map(number => { // this oes threough the array and creates another array with the arguement (math) excecuted on each item.
    return number * 2;
});
console.log(buyTwo);

const mySchoolList = ['desk', 'trash can', 'computer', 7, 'paper', 19.89];
const onlyThings = mySchoolList.filter(item => { // this went though the array and only printed out the things that were NOT numbers
    return typeof item !== 'number';
});
console.log(onlyThings);

const firstFamLetter = family.map( family => { // this went through the array as if each letter was an item in an array like [Trinity, .....] is [T, r, i, n,......]
    return family[0]; // this called the first letter of eath name in the array
});
console.log(firstFamLetter.join(''));

const shortNames = family.filter(kids => { //this created an array that only has items with less than 4 letters in the name
    return kids.length < 4;
});
console.log(`${shortNames} has less than 4 letters in their name.`);
