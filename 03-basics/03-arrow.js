const user = {
    username: "tanu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);


//Declaration Function
// function chai() {
//     let username = "tanu"
//     console.log(this.username); //op: undefined ->this will only gets used in object
// }
// chai()


//Expression function
// const chai = function () {
//     let username = "tanu"
//     console.log(this.username); //op: undefined
// }
// chai()


//Arrow function
const chai = () => {
    let username = "tanu"
    console.log(this);
}
// chai()


//syntax
() => { }


//if you use {} then use return keyword, if not then don't use
//return - explicit, if not - implicit


//Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));


//Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "tanu" })
console.log(addTwo(3, 4));


// const myArr = [2, 4, 5, 6]
// myArr.forEach(() => { })
