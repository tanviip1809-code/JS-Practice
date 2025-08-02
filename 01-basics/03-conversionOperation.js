let score = "Tanu"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score) //here string is converted into number
// console.log(typeof valueInNumber); 
// console.log(valueInNumber); //op: NaN = not a number 

//This is example of conversion in number
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = "tanu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"tanu" => true

let someNumber = 33
let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ********************* Operations **************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "tanu"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //op: 12
// console.log(1 + "2"); //op: 12
// console.log("1" + 2 + 2); //op: 122 => first string so afterwards coverted into string
// console.log(1 + 2 + "3"); //op: 33 => first it has number so it will add and the converted into string
// console.log((3 + 4) * 5 % 3); // this is bad syntax

console.log(+true); //1 => because of true
console.log(+""); //0 => because it has empty string

let num1, num2, num3
num1 = num2 = num3 =  2+2+2
console.log(num1, num2, num3); //it is not recommend 

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //101
