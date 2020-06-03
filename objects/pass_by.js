let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil' //this changes tje fuel type to avocado oil
};
let remotelyDisable = obj => {
  obj.disabled = true //this adds to the spaceship a disable item with the property of "true"
  }
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)
/* so the new object should pront this out
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }
  */
