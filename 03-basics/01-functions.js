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
function loginUserMessage(username = "sam") {
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tanu"))

console.log(loginUserMessage("tanu")) //op: undefined just logged in, if string is empty
