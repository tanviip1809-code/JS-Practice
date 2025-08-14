// for of

//Syntax
//here element is - variable which we want to declare
//object is - name which we have declare
// for (const element of object) {
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet} `)
}

//continue - it will remove space
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char is ${greet} `)
}

// Break - Stop from space
for (const greet of greetings) {
    if (greet == " ") {
        break
    }
    console.log(`Each char is ${greet} `)
}


//Maps 
//for unique values - no dupe values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}


//Object with forof loop -> forof loop doesn't work for object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }