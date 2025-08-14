//forin loop

const myObject = {
    js: "JavaScript",
    cpp: 'C++',
    rb: "Ruby",
    swift: "swift by app"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "python", "java"]
for (const key in programming) {
    console.log(programming[key])
}


// Map is not iterable in forin loop
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")

// for (const [key, value] in map) {
//     console.log(key, ':-', value)
// }


