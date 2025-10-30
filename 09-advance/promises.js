const promiseOne = new Promise(function (resolve, reject) {
    //Do an asynvc call
    //DB calls, cryptography, etc
    setTimeout(function () {
        console.log('Async task is completed')
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise consumed")
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async task 2 is consumed")
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Tanvi", email: "t@1223" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JS", email: "js@1223" })
        } else {
            reject("ERROR: something went wrong")
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user)
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected")
    })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ usernsme: "Practice", password: "1234" })
        } else {
            reject("ERROR")
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        console.log(data[0].username);
        return data[0].username;
       
    })
    .then((username) => {
        console.log(username)  
    })
    .catch((error) => {
        console.log(error)
    })