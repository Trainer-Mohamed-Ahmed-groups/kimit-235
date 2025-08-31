//  input >> JavaScript is my favorite language
/*
output >>
1- JavaScript
2- is
3- my
4- favorite
5- language
*/

function ordering(str) {
    let arr = str.split(' ')

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(index + 1 + '- ' + element)
    }
}

ordering('JavaScript is my favorite language')

/************************************************** Task **************************************************/
// Present odd numbers from 0 to 20 only
