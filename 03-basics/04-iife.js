//Immediately Invoked Function Expression (IIFE)

//WHY IIFE? -> there is a many problem happen by global scope pollution, so to remove that pollution which is happen by global scope variables or declaration or by any other thing, we use iife 

//Create a private scope
//In IIFE, it is necessary to end that function by using semicolon

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//syntax
((name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('tanu')

