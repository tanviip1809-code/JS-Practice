const accountId = 144553
let accountEmail = "tprajapati615@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // we can't change the value of const keyword which is assigned once, not allowed

accountEmail = "hi@gmail.com"
accountPassword = "21212121"
accountCity = "Bengluru"

console.log(accountId); 
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

