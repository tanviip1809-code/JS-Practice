const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //it pushes value in existing array
// console.log(marvel_heros); //op: [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros.length) //it takes whole array as a element that's why op: 4

// //if you want to access array element of inside array
// console.log(marvel_heros[3][1]); //flash

//concat return new array without modifying an existing array
const allHeros = marvel_heros.concat(dc_heros) //op: same as a push
console.log(allHeros); //op:[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

//spread operator
const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);

//flat
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) //recommend to provide depth
console.log(realAnotherArray); //gives all element in one array

//isArray - checks if that is an array or not
console.log(Array.isArray("tanu"))//it gives value in true or false 

//from
console.log(Array.from("tanu")); //create array from that 
console.log(Array.from({ name: "tanu", age: 21 })); //interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //it also create array from varibles 






