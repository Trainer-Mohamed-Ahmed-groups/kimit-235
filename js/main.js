"use strict";

var x = 0;
while (x < 5) {
    console.log(x);
    x++;
}
console.log("------------")


// /////////////////////////////////////////////

var y = 0;
do {
    console.log(y);
    y++;
} while (y < 5);
console.log("------------")

// /////////////////////////////////////////////
for (var z = 0; z < 5; z++) {
    console.log(z);
}

console.log("------------")

/* Get Odd */


for (var i = 0; i < 10; i++) {
    if (i % 2 === 1) console.log(i)
}

console.log("------------")
for (var o = 1; o < 10; o += 2) {
    console.log(o)
}



console.log("------------")
for (var p = 1; p <= 10; p++) {
    // if (p === 7) break;
    // if (p === 7) continue;
    if (p % 2 === 0) continue;
    console.log(p)
}
console.log("------------")


/*******************************************************************/
const q = 5;
console.log(q)

test()

function test() {
    const t = 5;
    console.log("This is test : " + t);
}


{
    var t = 10;
}
console.log(t);


var f = 401;

var f = 500; // redeclaring with var is allowed

console.log(f)
//////////////////////////////////////////////////////////////////


console.log(3 * "5")
console.log(3 + "5")
console.log(10 > 4)

console.log(true == 1)

console.log(Boolean(" "))


var u = "10.9264"

console.log(parseInt(u))
console.log(parseFloat(u))
console.log(Number(u))
