const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1]; //calls "item01" which is '6' within the parent "item02" which is '[5, 6]
console.log(target); //prints "6"

const nestArr = [['solo'], ['duet01', 'duet02'], ['trio01','trio02', 'trio03']];
console.log(nestArr[2]); // print outs  ["trio01", "trio02", "trio03"]
const duo = nestArr[1]; // assign a nested item to the variable called 'duo'
console.log(duo);// prints out  ["duet01", "duet02"]
console.log(nestArr[2][1]); // prints out "trio02"
