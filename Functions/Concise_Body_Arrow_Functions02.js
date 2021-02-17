/* with Concise Body Arrow Functions we can change this code :
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
to this code:
*/
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater('Wednesday')) 
//this will display "true"

// this is code that calculates the area of triangles but using arrows
const mesurementsTri = (base, height) => {
  return base * height;
}
const areaCal1 = (base, height) => {
   if (base < 0 || height < 0) {
   return `Either ${base} or ${height} is not a positive interger. Input another number please.`;
   }
  return mesurementsTri(base, height) * 0.5;
};
console.log(`The area of your triangle is ${areaCal1(3, 9)} square units.`);
