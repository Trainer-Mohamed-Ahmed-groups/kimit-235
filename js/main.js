//You get an array of numbers, return the sum of all of the positives ones.
//Note: if there is nothing to sum, the sum is default to 0.


function sumOfArray(arr) {
    let sum = 0;

    if (Array.isArray(arr)) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element > 0) {
                sum += element
            }
        }
    }

    return sum;

}


console.log(sumOfArray([5, 7, 8, 9, -45, 10]))
console.log(sumOfArray([]))


console.log("-".repeat(20))
/************************************************** Task **************************************************/
// Present odd numbers from 0 to 20 only

var sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        sum += i;
    }
}
console.log(sum)
