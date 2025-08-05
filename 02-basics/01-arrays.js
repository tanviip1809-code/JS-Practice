//arrays
//array is a object
//array means we can store multiple values in one element
//arrays are resizable - we can add element after declaration
//array can contain all type of datatypes in one variable - mix of variables
//when we copy array it gives shallow copy - it means it shares the reference point means it will directly change in the org array
//deep copy - copy of the array

//ways of declare an array
const myArr = [0, 1, 2, 3, 4, 5, true, "tanu"]
const myHeros = ["ironman", "captian america"]
const myArr2 = new Array(1, 2, 3, 4) //there is no need for square bracket when we declare a array by "new" keyword

// console.log(myArr[1]);

//Array Methods

myArr.push(6) //push this element in array at 
myArr.push(7)
myArr.pop() // remove one value from the last

myArr.unshift(0) //add one value at the beginning
myArr.shift() //remove one element from beginning

// console.log(myArr.includes(9)); // gives op in true and false - shows if that element is include or not
// console.log(myArr.indexOf(3)); //gives the index of the value

const newArr = myArr.join() //adds all the element of the array in the string 
// console.log(newArr); //op : 0,1,2,3,4,5,true,tanu,6
// console.log(typeof newArr); //op: string - now it becomes string

// console.log(myArr);

//Slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //slice - give part of the array (startindex - inclu, endindex - exclu)
console.log(myn1); //slice doen't manipulate the array 
console.log("B", myArr);

const myn2 = myArr.splice(1,3) //splice - it manipulates org array and remove that part from array which is mentioned in the splice
console.log("C", myArr);
console.log(myn2) 


 





