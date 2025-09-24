// Get num of Capital and num of small letters in the word


// Kimit academy iS a software Academy SOFTWARE house

function numOfLetters(word) {
    var capitalLetters = 0,
        smallLetters = 0,
        arr = word.split('')
    console.log(arr);

    for (let index = 0; index < word.length; index++) {
        // const element = arr[index];
        // if()
        if (word.charCodeAt(index) >= 65 && word.charCodeAt(index) <= 90) { capitalLetters++ }
        else if (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) smallLetters++
        // console.log(element.charCodeAt(0));
    }
    console.log(capitalLetters);
    console.log(smallLetters);
}


function numOfLetters(word) {
    console.log(word.split('').filter(letter => letter === letter.toUpperCase() && letter !== ' ').length);
    console.log(word.split('').filter(letter => letter === letter.toLowerCase() && letter !== ' ').length);
}


function checkCapital(letter) {
    return letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90
}
var checkSmall = (letter) => letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122

function numOfLetters(word) {
    var arr = []


    arr = word.split('').filter(letter => checkCapital(letter) || checkSmall(letter));


    console.log(arr.filter(letter => checkCapital(letter)).length);
    console.log(arr.filter(letter => checkSmall(letter)).length);
}
numOfLetters("Kimit academy iS a software AcAdemY $ SOFTWARE house")



// Get the average of the array
