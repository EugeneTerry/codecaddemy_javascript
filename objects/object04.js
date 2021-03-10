console.log(`//////////////Looping Through Objects///////////////`)
let redBark = {
    occupant:[{
        name: 'Gabrielle'
    }],
    house: {
        yearBuilt: 2004,
        color: 'Brick',
        fence: false,
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
for (let houseOwer in redBark.owners) { // this for...in loop creates a temp variable that gose through each property 
    console.log(`${houseOwer}: ${redBark.owners[houseOwer].name}`); // prints "wife: Teresa" "husband: Eugene"
}

for (let houseOwer in redBark.owners) { // this for...in loop creates a temp variable that gose through each property 
    console.log(`${redBark.owners[houseOwer].name}: ${redBark.owners[houseOwer].degree}`); } //prints ou "Teresa: Ed.D" "Eugene: M.Ed"