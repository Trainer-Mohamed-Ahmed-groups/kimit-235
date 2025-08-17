var courseOne = "FrontEnd course and UI/UX design course",
    courseTwo = "Backend course"

console.log(courseOne.length)
console.log(courseOne[0])
console.log(courseOne.charAt(0))
console.log(courseOne.charCodeAt(0))
console.log(String.fromCharCode(70))

console.log(courseOne + courseTwo)
console.log(`${courseOne} ${courseTwo}`)
console.log(courseOne.concat(courseTwo))


console.log(courseOne.startsWith('Front'))
console.log(courseOne.endsWith('e '))
console.log(courseOne.includes('end'))
console.log(courseOne.indexOf('en'))
console.log(courseOne.indexOf('e'))
console.log(courseOne.lastIndexOf('e'))


console.log(courseOne.match(/e/g))
console.log(courseOne.match(/e/g).length)
console.log(courseOne.match(/e/gi))


console.log(courseTwo.repeat(20))



console.log(courseOne.replace('UI', "test"))


console.log(courseOne.search('course'))


console.log(courseOne.slice(3, 10))


console.log(courseOne.split(' '))
console.log(["test", "Hello", "OK"].join(' '))



var username = 'Mahmoud'
console.log(username.substring(2, 6))
console.log(username.substr(2, 6))


console.log(username.toUpperCase())
console.log(username.toLowerCase())


var message = "    I     am    a    developer      ";



console.log(message)
console.log(message.trimStart())
console.log(message.trimEnd())
console.log(message.trim())


console.log(Math.random())
console.log(Math.ceil(5.1))
console.log(Math.floor(5.999))
console.log(Math.round(3.4))
console.log(Math.max(45, 54, 87, 48, 21, 48))
console.log(Math.min(45, 54, 87, 48, 21, 48))
console.log(Math.pow(2, 3))
console.log(Math.sqrt(25))
console.log(Math.PI)
console.log(Math.abs(-12))
console.log(Math.abs(12))
