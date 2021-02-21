// this looked for matching items within two arrays
const bobsFollowers = ['Joe', 'Mike', 'Mary', 'Jan'];
const tinasFollowers  = ['Joe', 'Mark', 'Mary'];
const mutualFollowers  = []
for (let i = 0; i < bobsFollowers.length; i++) { // this goes through each item in the first array
  for (let j = 0; j < tinasFollowers.length; j++) { // this goes throught each item ibn the second array each time it thourgh the first
    if (bobsFollowers[i] === tinasFollowers[j]) { // this reconizes if any of the items match from both arrays
       mutualFollowers.push(tinasFollowers[j]) // this pushes the value of the matching item into a third array
      console.log('Both users have ' + bobsFollowers[j] + ' as a friend.')
      /* this prints
      "Both users have Joe as a friend.
      Both users have Mary as a friend."
    }
  }
};

const liquorList = ['Jack', 'Titos', 'Jose', 'Crown', 'Dos XX'];
const herLiquorList = ['Dos XX', 'Rose', 'Henessee', 'Chris', 'Crown'];
const mustHaveLiquor = []
console.log(`My List From Last to First`);
console.log(liquorList)
console.log(herLiquorList)

for (let i = 0; i < liquorList.length; i++) {
    for (let j = 0; j < herLiquorList.length; j++) {
      if (liquorList[i] === herLiquorList[j]) {
        mustHaveLiquor.push(liquorList[i]);
        console.log(`Both lists have ${liquorList[j]} in them`)
      }
    }
  };
  console.log(mustHaveLiquor);
