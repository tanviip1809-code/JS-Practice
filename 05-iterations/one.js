// for loop

//Syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }


for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        console.log("5 is best number")
    }

    console.log(element);
}


for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);

    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j + ' = ' + i * j);

    }

}


//for loop in Array

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


// Break and Continue

//Break
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("5 detected");
        break; //here loop stops at 5
    }
    console.log(`Value of i is: ${index}`);

}

//Continue
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("5 detected");
        continue; //it just skips it one time, that means 5 won't print but other number will print
    }
    console.log(`Value of i is: ${index}`);

}
