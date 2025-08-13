const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have useremail")
}

//Falsy Values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
//true, "0", 'false', " ", [], {}, function(){}


//if array is empty, it can be checked by length === 0
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//if object is empty, it can also be checked by length === 0
const emptyObject = {}

//object.keys(emptyObject) -> returns an array of keys 
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10 //op: 5
// val1 = null ?? 10 //op: 10
// val1 = undefined ?? 15 //op: 15
val1 = null ?? 10 ?? 20 //op: 10
console.log(val1);


//Ternary Operator

//Syntax
// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")