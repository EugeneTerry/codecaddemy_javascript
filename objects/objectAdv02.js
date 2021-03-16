console.log(`///////////Factory Functions////////////`)
const terryFactory = (name, age, talent, catchPhrase) => {
    /*return {
        name: name,
        age: age,
        talent: talent,
        saying() {
        console.log(catchPhrase);
        }*/
    return {// this is the short-hand version so i dont have to keep repeating the propery names
        name,
        age,
        talent,
        saying() {
        console.log(catchPhrase);
        }
    }
}// now i can add a list and properties to create objects
const kid01 = terryFactory('Trinity', 21, 'singing', 'Jeez Lois');
const kid02 = terryFactory('Remle', 19, 'gaming', 'affirmative');
const kid03 = terryFactory('Gabrielle', 16, 'art', 'thats sus');
const kid04 = terryFactory('Dess', 11, 'crafts', 'i dont know');
console.log(kid01.name);
console.log(kid02.name);
const newCat = Object.assign({shoeSize: 'n/a'}, terryFactory);
console.log(newCat);

