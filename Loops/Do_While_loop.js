// goes through a single loop before it does the continus loop no mater the result
let cupsOfSugarNeeded = 6;
let cupsAdded = 0;
let i = 1;

do {
  cupsAdded = cupsAdded + i; //this means to add one cup of sugar no matter what the recipe says
  i++;  // this will go up one cup every time it goes throught the loop like 2+3+4+5 nad will stop adding cups at 6
} while (i <= cupsOfSugarNeeded); 
console.log(cupsAdded)
// since the cupsOfSugarNeeded = 6 it will print "21"


const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
 let i = 0;
// Write your code below
do {
  console.log(rapperArray[i]); "
  i++;
  /* this will print out
  Lil' Kim
  Jay-Z
  Notorious B.I.G.
  Tupac*/
}
while (i <= rapperArray.length-1); //the primt out will stop when the last item "item[4]" is touched.
