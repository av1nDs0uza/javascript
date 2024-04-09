const name = "avin"
const repoCount = 50

//console.log(name +repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('avin-ad-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,2)
console.log(newString);
const anotherString = gameName.substring(-3,1)
console.log(anotherString)


const newStringOne = "    avin   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://avin.com/avin%20dsouza"

console.log(url.replace('%20' , '-'))

console.log(url.includes('av'))

console.log(gameName.split('-'));


