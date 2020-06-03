let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Here I used brackets to accsess the propteries in the objects
let isActive = spaceship['Active Mission'];

console.log (isActive);
