// ForEach Loop

const coding = ["js", "python", "java", "ruby", "cpp"]

//By manual function
coding.forEach(function (item) {
    console.log(item);
})

//By Arrow Function
coding.forEach((item) => {
    console.log(item);
})

//By PrintMe function
function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )