const score = 400
// console.log(score);
// console.log(typeof score);//OP:number


const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);//op:object

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(3)); //100.000 add 3 zeros after number

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //make overall number in given length op:124

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //in indian - 10,00,000

//***************************** Maths  ************************/

// console.log(Math); //Math is object itself

// console.log(Math.abs(-4)); //abs changes the sign but only for negative

//console.log(Math.round(4.3)); //round - round of the value op:4 if 4.6 then op: 5

// console.log(Math.ceil(4.2)); // ceil is if more than 4 then it will be 5 no matter what the number is. even if the number is slightly bigger 4.1=5

// console.log(Math.floor(4.9)); //remove numbers after the point

// console.log(Math.min(4, 3, 6, 1)); //give the minimum value

// console.log(Math.max(45, 90, 345, 789)); //give the max value

console.log(Math.random()); //always gives values between 0-1
console.log(Math.floor(Math.random() * 10) + 1); //multiplying by 10 it will shift the value to the left side by 1 point and math.floor will remove unnecessary number which is after the point
//to avoid 0 we have add 1
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//here (max-min+1) is for range define - it defines the range 
//(max-min+1) = (20-10+1) it defines the range which is 10 and to avoid 0 we have add 1
//+min is for to define what is our min value is

