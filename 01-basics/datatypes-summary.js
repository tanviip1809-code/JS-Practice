// Primitive Datatypes
// 7 types : String, Number, Boolean, Null=empty, undefined, Symbol, BigInt
//This is call by values - when you use this string again somewhere, it doesn't give a org memory but it gives you a copy of that value.
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567837837873883n


//Non-Primitve Datatypes (Reference)
//It will direct give you a reference
//Arrays, Objects, Functions

//JS is dynamically typed - because we don't have to define the typeof value, it automatically determined at runtime 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "tanu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
