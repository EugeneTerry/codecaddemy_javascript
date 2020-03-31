const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {  //that is a long variable 
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes; //this makes the code cleaner without changing the original
is2p2 ()
console.log(is2p2.name) //use this to find out the original variable name
// prints "checkThatTwoPlusTwoEqualsFourAMillionTimes"
