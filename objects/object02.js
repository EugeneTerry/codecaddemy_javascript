console.log(`/////////////////Manipulating propteries in objects//////////////////////`)
/*let closet = { 
    'Pants': 'jeans',
    'Shirts': 'Printed Ts',
    'Clean Today': true,
    socks: 'crew',
    underWear: 7,
    watchBands: ['Blue', 'Green', 'Purple', 'Black']
};*/
closet.underWear = 19;
console.log(closet.watchBands, closet.underWear);
delete closet['Clean Today'];
console.log(closet['Clean Today']); // this should be indifined because it was deleted the line before

let laundryMessage = 'All of your clothes need to be washed!';

let washClothes = { //this is the object too!!!
    stinky () {//property name
        console.log(laundryMessage) //value
    },
    machine () {
        console.log(`swish... swish...swish...!`)
    }
};
washClothes.stinky();
washClothes.machine();
