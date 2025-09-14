function calc(num) {
    var result = 0;
    if (num > 0 && num <= 100) {
        for (let i = 1; i <= num; i++) {
            result += i
        }
        return result;
    }
    else {
        throw "Number must be between 1 and 100"
    }
}

try {
    console.log(calc(-5));

} catch (error) {
    console.warn(error);
}
console.log(calc(10));
console.log(calc(5));
console.log(calc(5));


////////////////////////////////////////////////////////
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
