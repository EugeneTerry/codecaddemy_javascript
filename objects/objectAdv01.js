console.log(`//////////////Advanced Objects Stuff///////////////`)
const dog1 = {
    name: 'Luna',
    sizeDog: 'Small',
    makeSound() {
        console.log('woof!');
    },
    collarType() { // this method used the "this" keyword to grab properties from the object.
        console.log(`${this.name}'s dog collar size is ${this.sizeDog}.`); 
    }
}
dog1.collarType();

const dog2 = {
    name: 'Diego',
    sizeDog: 'large',
    makeSound() {
        console.log('Bark!');
    },
    collarType (){ // functions have to be written like this to use the "this" keyword to grab properties from the object.
        console.log(`${dog2.name}'s dog collar size is ${dog2.sizeDog}.`);
    }
}
dog2.collarType();