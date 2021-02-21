const techList = ['iPhone', 'Apple Watch', 'Alexa Ring', 'Laptop'];
const changeIphone = (arr) => { //this function is going to go into the array and change some stuff arr is a variable in the function
    arr[0] = 'Iphone'; // this changes the the item [0] 'iPhone' to 'Iphone'
}
console.log(`The original array is ${techList.join(', ')}`); // .join used to make the printout look neat
changeIphone(techList); 
console.log(techList);

const removeTech = (newTechList) => {
    newTechList.push('Air Pod'); //this in going to add 'Air Pod' at the end of the array
}
removeTech(techList);
console.log(techList);
