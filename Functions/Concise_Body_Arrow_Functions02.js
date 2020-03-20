/* with Concise Body Arrow Functions we can change this code :
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
to this code:
*/
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater('Wednesday')) 
//this will display "true"
