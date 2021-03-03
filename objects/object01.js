console.log(`/////////////////Creating and recalling propteries in objects//////////////////////`)
let closet ={ 
    'Pants': 'jeans',
    'Shirts': 'Printed Ts',
    'Clean Today': true,
    socks: 'crew',
    underWear: 7,
    watchBands: ['Blue', 'Green', 'Purple', 'Black']
};
let undiesCount = closet.underWear;
let watchWeek = closet.watchBands;
console.log(undiesCount, watchWeek);

console.log(closet['Clean Today']);
console.log(closet.underWear);
