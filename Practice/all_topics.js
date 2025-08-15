//Level 1
// let name = "Tanvi"
// const birthyear = 2004
// let currentAge = 21
// console.log(`My name is ${name}, my age is ${birthyear} and my birth year is ${currentAge}`);

// let num = "25"
// console.log(Number(num) + 5);

// let nullVar = null;
// console.log(Number(nullVar)); //0

// console.log(2 == '2');
// console.log(2 === '2');

// let sentence = "JavaScript is fun"
// console.log(sentence.length);
// console.log(sentence.toUpperCase());
// console.log(sentence.slice(13));

// let myNum = 45.6789
// console.log(myNum.toFixed(2));
// console.log(Math.floor(Math.random() * 10) + 1);

// const date = new Date()
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());

// let fruits = ['banana', 'apple', 'mango']
// fruits.push('cherry')
// fruits.shift()
// console.log(fruits);

// let user = {
//     userName: "tanvi",
//     userAge: 21,
//     userCity: "Ahmedabad"
// }
// user.userCity = "Bengluru"
// user.isStudent = true
// console.log(user);

// function greet(name) {
//     console.log(`Hello ${name}`);

// }
// greet("tanu")

// function scopeTest() {
//     if (true) {
//         let blockScoped = "I am blockScope"
//         var globalScoped = "I am GlobalScoped"
//     }
//     console.log(globalScoped);
// }
// scopeTest()

// const greetings = (name) => {
//     return `Hello ${name}`;

// }
// console.log(greetings("tanu"))

// let nums = 45
// if (nums > 0) {
//     console.log("number is positive");
// } else if (nums == 0) {
//     console.log("number is zero")
// } else {
//     console.log("number is negative")
// }

// let dayNumber = 3
// switch (dayNumber) {
//     case 1: console.log("Monday")
//         break
//     case 2: console.log("Tuesday")
//         break
//     case 3: console.log("Wednesday")
//         break
//     case 4: console.log("Thursday")
//         break
//     case 5: console.log("Friday")
//         break
//     case 6: console.log("Saturday")
//         break
//     case 7: console.log("Sunday")
//         break
// }

// let val = ""
// console.log(Boolean(val))
// if (val) {
//     console.log("Hello")
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// let str = "Tanu"
// for (const num of str) {
//     console.log(num)
// }

// let obj = { a: 1, b: 2, c: 3 }
// for (const key in obj) {
//     console.log(key)
// }

// let myArr = [1, 2, 3, 4, 5]
// let newArr = myArr.filter((item) => item % 2 == 0)
// console.log(newArr);
// let anotherArr = myArr.map((item) => item * 2)
// console.log(anotherArr);
// let anotherNewArr = myArr.reduce((acc, currVal) => (acc + currVal), 0)
// console.log(anotherNewArr);

//Level 2
const book = {
    bookTitle: "BookOne",
    bookAuthor: "Tanu",
    bookPrice: 1999
}
book.bookPrice = 999
book.isAvailable = true
console.log(book);

let myNums = "007"
console.log(Number(myNums));
if (myNums > 6) {
    console.log("Greater")
}

console.log(Number("Tanu")); //NaN
console.log(Boolean("0")); //true
console.log(Boolean(0));  //false

let text = "JavaScript";
console.log(text.slice(9));
console.log(text.split("").reverse().join(""))

const min = 50
const max = 100
console.log(Math.floor(Math.random() * (max - min + 1) + min));

let birthDate = new Date("2004-09-18")
console.log(birthDate.getDay())

let numbers = [10, 20, 30, 40];
numbers.pop()
numbers.unshift(5)
console.log(numbers);

let userName = { name: "Tanu", country: "India" };
console.log(userName.hasOwnProperty("age"));

function sum(val1, val2) {
    return val1 + val2;
}
console.log(sum(5, 20))

const mySum = (val1, val2) => {
    return val1 + val2
}
console.log(mySum(5, 20))

let numDivision = 24
if (numDivision % 2 == 0 && numDivision % 3 == 0) {
    console.log("It can be divide")
} else {
    console.log("Not")
}

let grade = 'C';
switch (grade) {
    case 'A': console.log("Excellent")
        break
    case 'B': console.log("Good")
        break
    case 'C': console.log("Average")
        break
    case 'D': console.log("Poor")
        break
        Default: console.log("Invalid Grade")
}

let value = " "
console.log(Boolean(value))

let myNewArr = [1, 3, 5, 7]
for (const item of myNewArr) {
    console.log(item)
}

let person = { name: "Tanu", age: 23, city: "Ahmedabad" };
for (const key in person) {
    console.log(`this is ${person[key]}`)
}

let myVal = [5, 10, 15, 20]
let myNewVal = myVal.filter((num) => num > 10)
console.log(myNewVal);
let myAnotherVal = myVal.map((num) => num / 5)
console.log(myAnotherVal)
let multiplied = myVal.reduce((acc, currval) => (acc * currval), 1)
console.log(multiplied)

