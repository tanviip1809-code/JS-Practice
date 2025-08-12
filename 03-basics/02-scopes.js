//var - global scope, it is also gets execute after finishing block scope, that is problematic
//let - block scope, this doesn't execute outside the block scope
//const - block scope

var c = 300
let a = 300
const b = 400

//{} is a block scope and outside its a global scope
if (true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a); //op: 10 ->block scope doesn't get execute outside the {}.
}

// console.log(a); //op: 300
// console.log(b); //op: 400
// console.log(c);

//NESTED SCOPES
//In nested scope child function can access parent's variable and all the things but parent's scope can't access child's 

//function one - parent, function two - child
function one() {
    const username = "tanu"

    function two() {
        const website = "youtube"
        console.log(username); //child fun can access parent's variable

    }
    // console.log(website); //it gives error here bcz parent can't access child's 

    two()
}
one()


//If-else function
//when we log it out username outside the scope, it will give an error bcz username has been defined inside the scope. so conclusion is, if anything is assgined or declared inside the block scope, then we can't use that outside the scope just like username and website

if (true) {
    const username = "tanu"

    if (username === "tanu") {
        const website = " youtube"
        console.log(username + website);

    }
    // console.log(website); //it'll give error bcz website is outside of the scope, where website has been defined

}
// console.log(username); //it'll also give error here bcz username is also outside of the scope, where username has been defined

// ******************* interesting ***********************

//Function Declaration - can be called before it's written in the code
// addOne(5) //like this - it'll execute
function addOne(num) {
    return num + 1
}
addOne(5)

//Function Expression - must be defined before calling
// addTwo(5) //error - bcz it is not defined yet 
const addTwo = function (num) {
    return num + 2
}
addTwo(5)