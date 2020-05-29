const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number'; /*this will filter out everything but numbers*/
});

console.log(onlyNumbers);
/* this will display
[ 5, 3.14, 100 ]
*/
