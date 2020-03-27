const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") { //this breaks the loop when the array item is "Notorious B.I.G."
     console.log(rapperArray[i]);
    break
  }
  console.log(rapperArray[i]);
  /* this prints
  "Lil' Kim
  Jay-Z
  Notorious B.I.G."
  and not "Tupac"
  */
}
console.log("And if you don't know, now you know.") //this prints "And if you don't know, now you know."
