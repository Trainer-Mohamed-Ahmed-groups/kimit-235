// Capital letter
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i))
}

console.log("*".repeat(15))


// Small letters
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i))
}

console.log("*".repeat(15))


for (let i = 65; i < 122; i++) {
    if (i >= 91 && i <= 96) continue
    console.log(String.fromCharCode(i))

}



var context = "Hello Js is a good language";

if (!context.includes('bad')) console.log("It does not contains bad")


console.log(context.match(/a/gi))
console.log("Your text is contains " + context.match(/a/gi).length + " letter of A")


var text = "Hello%This% is%a%JS%course"
console.log(text.split('%').join(' '))
console.log(text.replace(/%/g, ' '))
console.log(text.replaceAll('%', ' '))
