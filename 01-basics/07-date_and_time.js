// Dates

let myDate = new Date()
//date is object

console.log(myDate.toString()); //Mon Aug 04 2025 17:22:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon Aug 04 2025
console.log(myDate.toLocaleDateString()); // 8/4/2025
console.log(myDate.toLocaleString());// 8/4/2025, 5:22:24 PM
console.log(typeof myDate);


let myCreatedDate = new Date(2025, 0, 23) //mon jan 23 2025 // here also months starts from 0
console.log(myCreatedDate.toLocaleDateString()); //1/23/2025

let myCreatedNewDate = new Date(2025, 0, 23, 9, 25) //date and time
console.log(myCreatedNewDate.toLocaleString()); // op:1/23/2025, 9:25:00 AM

let myNewDate = new Date("2025-01-14") //yy-mm-dd format //in this format month will start from 0
console.log(myNewDate.toLocaleString()); // 1/14/2025, 12:00:00 AM

let AnotherDate = new Date("01-14-2025")
console.log(AnotherDate.toLocaleString()); //mm-dd-yy 

//time stmaps
let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(AnotherDate.getTime());

console.log(Date.now()/1000); //this give decimal value, so we will do math.floor to remove unnecessary value after the point
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getTime());

newDate.toLocaleString('default', {
    weekday: "long"
})




 