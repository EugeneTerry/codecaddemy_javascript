let run =Date.now() // I was just playing around with the Date.now method

const addTwo = num => num + 2;
console.log(`This is the first funtion`);

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

let stop = Date.now() 
console.log(`The time the computer took to get from the top of the code to here is ${stop-run} seconds.`); // I was just playing around with the Date.now method

const time2p2 = timeFuncRuntime(() => {
  for (let i = 20; i>0; i--){
    console.log(`${i}x`); // this counts down from 20 to 1 with an 'x' at the end of each number
  }
});
const checkConsistentOutput = (func, val) => { // this creates a function that creates a apace for another function and it's value
    let firstTry = func(val);
    let secondTry = func(val); // this just does some stuff to return a variable and activates the function
    if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
}; 
console.log(`This is the second funtion`);
console.log(checkConsistentOutput(addTwo, 6)); // this function calls another function using the value provided in the call
