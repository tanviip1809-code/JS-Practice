//Object Literal

const user = {
    username: "Tanvi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
        //console.log(this)
        
    }
}
console.log(user.username)
console.log(user.getUserDetails())

console.log(this)


//Constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Tanvi", 12, 9)
const userTwo = new User("Js", 11, 7)

console.log(userOne)
console.log(userTwo)

console.log(userOne.constructor)