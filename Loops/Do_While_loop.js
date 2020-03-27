// goes through a single loop before it does the continus loop no mater the result
let cupsOfSugarNeeded = 6;
let cupsAdded = 0;
let i = 1;

do {
  cupsAdded = cupsAdded + i; //this means to add one cup of sugar no matter what the recipe says
  i++;  // this will go up one cup every time it goes throught the loop like 2+3+4+5 nad will stop adding cups at 5
} while (i < cupsOfSugarNeeded); 
console.log(cupsAdded)
// since the cupsOfSugarNeeded = 6 it will print "15"
