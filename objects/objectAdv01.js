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

console.log(`//////////////Getters///////////////`)

const terryFam = {
    _firstName: 'Dess',
    _lastName: 'Terry',
    /*get fullName () {
        if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing first or last name.';
        }
    }*/
    get lastNameCheck () { // will get a property from an object and return something as a result of some perameters using an if statement
        if (typeof this._lastName === 'string'){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return `${this._firstName} is missing a last name because it is a ${typeof terryFam._lastName}`;
        }
    }
}
    console.log(terryFam.lastNameCheck);// prints the full name depending on the propery type.

    console.log(`//////////////Setters///////////////`)

