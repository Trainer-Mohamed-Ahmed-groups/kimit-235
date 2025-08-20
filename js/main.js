const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(fruits.length)
console.log(fruits.concat([9, 'test']))
console.log(fruits)
// console.log(fruits.copyWithin(2, 0))
// console.log(fruits)

const ages = [3, 5, 100, 18, 20];

console.log(ages.some(function (age) { return age > 18 }))
console.log(ages.some(checkAge))
console.log(ages.some(age => age > 18))

function checkAge(age) { return age > 18 }

console.log("*".repeat(15))

console.log(ages.every(function (age) { return age > 18 }))
console.log(ages.every(checkAge))
console.log(ages.every(age => age > 18))


// console.log(fruits.fill('course', undefined, 3))
console.log(ages.find(age => age > 18))
console.log(ages.findIndex(age => age > 188))
console.log(fruits)


console.log(ages.filter(age => age > 18))
var test = ages.map(age => {
    if (age > 18) { return ("Your age is over : " + age) }
    else return ("Your age is under: " + age)
})

console.log(test)
var testOne = ages.forEach(age => ("Your age is : " + age))
console.log(testOne) //undefined


console.log(ages)
console.log(fruits.slice(1, 3))
// fruits.pop()
// fruits.push('New fruit')

// fruits.shift()
// fruits.unshift("Another")
fruits.splice(1, 0, "New", "new2")

console.log(fruits)


console.log(fruits.join('-'))


console.log(fruits.toString())
console.log(fruits.sort())


var numbers = [91, 103, 122, 12, 88]


console.log(numbers.sort((a, b) => b - a))

let i = 0

function sayHello() {
    console.log("Hello : " + i)
    i++
}


// var myInterval = setInterval(sayHello, 500)
var myTimeout = setTimeout(sayHello, 4000)

function stopInterval() {
    // clearInterval(myInterval)
    clearTimeout(myTimeout)
}

var myDate = new Date();

console.log(myDate.getDay())
myDate.setDate(15)
console.log(myDate)
