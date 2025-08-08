//To declare a object

//new is a constructor
// const tinderUser = new Object() //singleton //empty object 

const tinderUser = {} //empty object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //op:{ id: '123abc', name: 'sammy', isLoggedIn: false }

//Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Tanvi",
            lastName: "Prajapati"
        }
    }
}

console.log(regularUser.fullName); //op: { userFullName: { firstName: 'Tanvi', lastName: 'Prajapati' } }

console.log(regularUser.fullName.userFullName); //op: { firstName: 'Tanvi', lastName: 'Prajapati' }

console.log(regularUser.fullName.userFullName.firstName); //op: Tanvi

console.log(regularUser.fullName.userFullName.lastName); //op: Prajapati

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//this is problematic
// const obj3 = { obj1, obj2 }
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2) //bracket is good practice
//console.log(obj3); //op: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2} //use more
console.log(obj3);

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns keys
console.log(Object.values(tinderUser)); //returns values
console.log(Object.entries(tinderUser)); //give every value key as a array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
