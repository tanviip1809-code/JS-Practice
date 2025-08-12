function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");
}

// sayMyName()

//function by parameters-arguments
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

//for return it is necessary to log it out
// Default value "sam" will be used if no username is passed
function loginUserMessage(username = "sam") {

    // Check if username is exactly undefined
    if (username === undefined) {
        console.log("please enter a username"); //only prints when username is undefined
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tanu")) // "tanu just logged in"
console.log(loginUserMessage("")) //op: just logged in, if string is empty
console.log(loginUserMessage()); //op: "sam just logged in"



function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000, 5000))
//op: [ 200, 400, 500, 2000, 5000 ]

function calculateCartPriceOne(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPriceOne(200, 400, 500, 2000, 5000));
//op: [ 500, 2000, 5000 ]
//here 200 is a value of val1 and 400 is a value of val2 and rest goes in num1 


//Object in Function 

//here we have create object and than pass it to the function
// const user = {
//     username: "tanu",
//     price: 199
// }

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `)
}

// handleObject(user) //here we have just calling a function with the object name 

//or we can direct pass a object at the time of calling
handleObject({
    username: "sam",
    price: 399
})


//Array in Function 

// const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray) {
    return getArray
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 400, 100]));
