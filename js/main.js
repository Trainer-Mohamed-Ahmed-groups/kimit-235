console.log("Hello from external")





/*
Multi lines comment
*/

// One line comment

var x = 10,
    y = 60,
    z = x + y;

console.log(z)

/******************************* Primitive datatypes ******************************/
// String

var username = "Mohamed",
    lastName = "Ahmed"

console.log(typeof username)

console.log(username)
console.log(username + " " + lastName)
// Number
// var myAge = prompt("Please enter your age");
// console.log(`Hello ${username} your age is ${myAge}`)
// console.log(+myAge)

// Boolean

var visited = true;

console.log(typeof visited)


// Undefined

var t;

console.log(t)

// Null
var mySpan = document.getElementById('test')

console.log(mySpan)


/******************************* NON Primitive datatypes ******************************/
// Object

var car = {
    name: "Mercedes",
    model: 2020,
    isSold: false,
    owner: undefined,
    // key : value
}

console.log(car)
console.log(car)
// Bracket notation
console.log(car['model'])

// Dot notation
console.log(car.name)


console.log(typeof car)



// Function

// Void function
// function greet() {
//     console.log("Hello I am good")
// }

var greet = function (username) {
    console.log("Hello I am good " + username)
}

greet("Mostafa")
greet("Peter")


function add(a = 0, b = 0) {
    return a + b
}


console.log(add(45, 45))
console.log(add(45, 5) * 3)
console.log(add(10))
console.log(add())


console.log(45 / 'A')
console.log(45 / 0)


// Array

var students = ["Mohamed", "Mahmoud", "Omar", "Nour"];

// students[0] = "Mohamed"
// students[1] = "Ali"
console.log(typeof students)
console.log(students)


console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[4])
console.log(students[-1])
console.log(students.length)
console.log(students[students.length - 1])
console.log(students.at(-1))

var employees = new Array(5).fill('dfdf');
// employees[0] = "test"
// employees[1] = "test2"
console.log(employees)


var mix = [12, "test", undefined, true, { name: 'Ali', courses: ["HTML", "CSS"] }, [4, 5, 6, 7]]
console.log(mix)
console.log(mix[4].name)
console.log(mix[4].courses[1])
console.log(mix[4]['courses'][1])
console.log(mix[5][2])
