"use strict";

var x = 5
if (x > 40) {
    console.log("Five is greater")
}
else {
    console.log("Five is not greater")
}

//////////////////////////////////////////////////////
var username = "Mohamed";

if (username == 'Ali') {
    console.log("This is Ali")
}
else {
    console.log("This is Not Ali")
}
/***************************** Operators **************************************/

var y = 10;


console.log(y++)
console.log(--y)
console.log(y)
console.log(y++)
console.log(y)


try {
    consol.log(15 % 3)
} catch (error) {
    console.error("HINT : " + error.message)
}
finally {
    console.log("This is the final message")
}


console.log("*******************")
console.log(5 == 5)
console.log(5 != 5)
console.log(5 === '5')
console.log(5 !== '5')

console.log("*******************")


var t = 50;

console.log(t)
t %= 10;
console.log(t)

console.log("*******************")

if (10 > 9 && 10 > 80) {
    console.log("OK")
}
else {
    console.log("NO")
}

console.log("*******************")

console.log("OK" && 0 && "NO")
console.log("OK" && 45 && "NO")
console.log("OK" && null && "NO")
console.log("OK" && undefined && "NO")
console.log("OK" && "" && "NO")
console.log("OK" && " " && "NO")
console.log("OK" && [] && "NO")
console.log("OK" && {} && "NO")
console.log("OK" && NaN && "NO")
console.log("OK" && Infinity && "NO")

// AND operator return first false and last true

console.log("*******************")
console.log("OK" || 0 || "NO")
console.log(0 || 45 || "NO")
console.log(undefined || null || "NO")
console.log("OK" || undefined || "NO")
console.log("OK" || "" || "NO")
console.log(null || " " || "NO")
console.log("OK" || [] || "NO")
console.log(0 || '' || "NO")
console.log("OK" || NaN || "NO")
console.log("OK" || Infinity || "NO")

// OR operator return first True and last false



if (10 > 9) {
    console.log("test")
}
else {
    console.log("test now")
}
/***************************************************************** */
var dayNumber = 2
// +prompt("Please enter the day number");


switch (dayNumber) {
    case 1:
    case 7:
        console.log("This is Weekend")
        break;
    case 2:
        console.log("This is Sunday")
        break;
    case 3:
        console.log("This is Monday")
        break;
    case 4:
        console.log("This is Tuesday")
        break;
    case 5:
        console.log("This is Wednesday")
        break;
    case 6:
        console.log("This is Thursday")
        break;
    default:
        console.log("Invalid")
}



function getRectArea(width, height) {
    if (isNaN(height) || isNaN(width)) {
        throw "Invalid input"
    }
    else {
        return width * height
    }
}
try {
    console.log(getRectArea('E', 6))
} catch (error) {
    console.error(error)
}



q = 80;
console.log(q)
