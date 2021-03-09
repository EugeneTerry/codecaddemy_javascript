console.log(`/////////////////Nested objects//////////////////////`)
let weatherStone = {
    occupant:[{
        name: 'Trinity'
    }],
    house: {
        yearBuilt: 2004,
        color: 'Burgundy',
        fence: 'wood',
    },
    owners: {
        wife: {
            name: 'Teresa',
            degree: 'Ed.D',
            saying() { console.log(`I'm Big Sexy!`)},
            'Favorite Food': ['rice', 'beans', 'chicken', 'pork chops']
        },
        husband: {
            name: 'Eugene',
            degree: 'M.Ed',
            saying() {console.log(`Everything has its place`)},
            'Favorite Food':['pizza', 'spaghetti', 'catfish']
        }
        }
    };

let newOccupant = obj => {//this renamed the occupant's name to Remle because of the "let" we used
    obj.name = 'Remle';
}
newOccupant(weatherStone);
console.log(weatherStone);

