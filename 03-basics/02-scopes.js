//var - global scope
//let - block scope

var c = 300
let a = 300

//{} is a block scope and outside its a global scope
if (true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);