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
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"tanu" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)