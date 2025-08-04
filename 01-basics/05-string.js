const name = "tanu"
const repoCount = 1

// console.log(name + repoCount + "good")

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

//string methods
const gameName = new String('tanu-p')

console.log(gameName);
console.log(gameName[0]);

console.log(gameName.__proto__);//syntax

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4) //startIndex - include, endIndex - excluded
console.log(newString);

const anotherString = gameName.slice(-3, 4) 
console.log(anotherString);
//in slice we can give negative value but in substring we can't

const newStringOne = "     tanu     "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim the additional spaces from end and starting

const url = "https://tanu.com/tanu%20prajapati"
console.log(url.replace('%20','-'))
console.log(url.includes('hello'))

console.log(gameName.split('-') );







