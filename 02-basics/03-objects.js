//Object => is a pair of keys-value
//Non-primitve datatype and reference

//singleton
//singleton objects only creates by constructor
Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Tanu" ,
    "full Name": "Tanvi Prajapati", 
    [mySym]: "mykey1", //we can mentioned symbol key as a square bracket
    age: 21,
    location: "Ahmedabad",
    email: "tanvi@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

//To access object 
console.log(JsUser.email); //dot notation
//even if we have space key, we can't use dot notation method

console.log(JsUser["email"]); //Bracket Notation
//this is for hyphen, space, number
//Why should we use above method for accessing object value is wxplained below

//as a example of full name key - that is defined in a string and space in-between so we can't access string value by JsUser.fullName it will give error.
// console.log(JsUser.full Name); //this is not correct

//That's why we use method of sqaure bracket
console.log(JsUser["full Name"])
console.log(JsUser[mySym])

//to change value
JsUser.email = "tanu@yahhoo.com"

//freeze - to lock the value, can't change the value 
// Object.freeze(JsUser)
JsUser.email = "tanu@google.com"
console.log(JsUser); 

//functions in object
JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `) //when we run some obj, "this" refers to the all value which is in object
}
console.log(JsUser.greetingTwo());
