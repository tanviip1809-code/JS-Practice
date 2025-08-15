//Variables and Datatypes
let myName = "tanu"
console.log(myName);

let age = 20
console.log(age);
age = 21
console.log(age);

let name = "Tanvi"
console.log(typeof name);
let myAge = 21
console.log(typeof myAge);
let isLoggedIn = true
console.log(typeof isLoggedIn);
let val1 = null
console.log(typeof val1);
let val2 = undefined
console.log(typeof val2);
let user = { name: "Tanu", age: 22 }
console.log(typeof user);
let nums = [1, 2, 3]
console.log(typeof nums);

let num1 = "10"
let num2 = 5
console.log(total = num1 + num2)
let num3 = Number(num1)
console.log(anotherTotal = num3 + num2)

let product = {
    productName: "Laptop",
    productPrice: 50000,
    isAvailable: true
}
console.log(`The product ${product.productName} costs ${product.productPrice} and it is available: ${product.isAvailable}`);

let arrCheck = [1, 2, 3];
console.log(Array.isArray(arrCheck));

let objCheck = { key: "value" };
console.log(Array.isArray(objCheck));

let bigNum = 123456789012345678901234567890n;
console.log(bigNum);

let x = 5;
let y = 10;
x = x + y;
console.log(x)
y = x - y;
console.log(y)
x = x - y;
console.log(x, y);

let score = "50"
let newScore = Number(score) * 2
console.log(newScore);
let anotherNewScore = console.log(Boolean(newScore))

let a;
console.log(typeof a);
a = "Hello"
console.log(a);

const myDetails = { name: "tanu", age: 21 }
myDetails.age = 20
console.log(myDetails);

console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);

let sum = 0.1 + 0.2
console.log(sum);

let sub = "JavaScript"
console.log(sub.toUpperCase())
console.log(sub.slice(0, 4))

let p = "5"
let q = 10
let mul = Number(p) * Number(q)
console.log(mul.toString().length);

let firstName = "tanu"
let lastName = "prajapati"
console.log(`${firstName} ${lastName}`);

let price = 999.5678
let myPrice = price.toFixed(2)
console.log(`₹${myPrice}`);

let marks = [85, 90, 78];
marks[1] = 95
marks.push(88)
console.log(marks);

let student = {
    name: "sam",
    age: 21,
    isPassed: true
}
student.isPassed = false
student.grade = 12
console.log(student);

let arr = ['banana', 'apple', 'mango']
console.log(arr.includes('apple'));

let mysteryValue = "true"
console.log(typeof (Boolean(mysteryValue)));

let number = 12345678901234567890n
console.log(number + 10n);

let num = 8
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");

}

