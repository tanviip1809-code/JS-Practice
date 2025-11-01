// let myName = "tanvi     "
// let myChannel = "chai    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

//Here, new prototype method is created in object; so array, function, string can access it
Object.prototype.tanvi = function () {
    console.log(`tanvi is present in all object`)
}

//Here, new prototype method is created in array; so only array can access it
Array.prototype.heyTanvi = function () {
    console.log("You are here accessible")
}

heroPower.tanvi()
myHeros.tanvi()

// heroPower.heyTanvi() //gives error bcz it is object and method is created in a array prototype
myHeros.heyTanvi()

//Inheritance
const user ={
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true,
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssginment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport //this is prototype inheritance
}

Teacher.__proto__ = user //this is prototype inheritance


//modern syntax
Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = "chaiAurcode       "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"tanvi".trueLength()
"  tanup".trueLength()