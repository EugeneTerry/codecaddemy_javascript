function rectangleDimensions(lenth, width) {
 if (lenth < 0 || width < 0) {
   return `${lenth} or ${width} is not a positive interger`;
 } 
 return lenth * width
}
const areaOfShape = rectangleDimensions(15 , 4)
console.log(areaOfShape)
