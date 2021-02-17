function rectangleDimensions(lenth, width) {
 if (lenth < 0 || width < 0) {
   return `${lenth} or ${width} is not a positive interger`;
 } 
 return lenth * width
}
const areaOfShape = rectangleDimensions(15 , 4)
console.log(areaOfShape)

// this next one givess the area of a triangle
function mesurementsTri(base, height) {
  return base * height;
}
function areaCal1(base, height) {
   if (base < 0 || height < 0) {
   return `Either ${base} or ${height} is not a positive interger. Input another number please.`;
   }
  return mesurementsTri(base, height) * 0.5;
};
console.log(`The area of your triangle is ${areaCal1(8.3, 9)} square units.`);
