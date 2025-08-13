//If statement - condition should be true, then and then internal code wil be run, if false then we will not enter in the code

//syntax
// if (condition) {
// }

const isUserLoggedIn = true
if (isUserLoggedIn) {

}

// const temperature = 41
// if (temperature === 41) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

//shorthand technique - not recommend
// const balance = 1000
// if (balance > 500) console.log("test");


//If - else Statement

//Syntax
// if (condition) {
// } else {
// }

const marks = 41

if (marks === 41) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

//Nested else-if 

const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true

// && - AND Operator -> both conditions have to be true
if(userLoggedIn && debitCard ){
    console.log("Allow to buy courses");
}


const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

// || - OR Operator -> any one conditions should be true 
if(loggedInFromEmail || loggedInFromGoogle || guestUser){
    console.log("You have logged in");

}