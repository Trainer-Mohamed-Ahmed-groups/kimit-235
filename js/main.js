console.log(document.createElement('img'));


var output = document.getElementById('output');

var myTag = document.createElement('span'),
    myText = document.createTextNode("Hello World")

console.log(myTag);
console.log(myText);
myTag.append(myText);
myTag.append('This is from outside');
myTag.prepend('This is more');


// output.append(myTag)
output.appendChild(myTag)
output.appendChild(document.createComment("This comment from JS"))
/*************************************************** */
var myUl = document.getElementById('myUl');

console.log(myUl.children);
console.log(myUl.childNodes);

myUl.style.color = '#F00';
myUl.style.backgroundColor = '#EEE'

/********************************************* */
var testTag = document.getElementById('test');


for (let index = 0; index < 4; index++) {
    let myInput = document.createElement('input');
    myInput.setAttribute('type', 'text')
    myInput.setAttribute('placeholder', 'This is test')
    myInput.setAttribute('name', 'user_' + (index + 1))
    testTag.appendChild(myInput)
}
/********************************************* */
var classExplain = document.querySelector('#classExplain');

function classAddition() {
    // classExplain.className = 'testBg'
    // classExplain.classList.add('testBg')
    // classExplain.classList.remove('textColor')
    // classExplain.classList.toggle('testBg')
    // console.log(classExplain.classList.item(0));
    console.log(classExplain.classList.contains('ok'));
}



console.log(myUl.firstChild);
console.log(myUl.firstElementChild);
console.log(myUl.lastChild);
console.log(myUl.lastElementChild);
/****************************************** */
const newNode = document.createElement("li");
const textNode = document.createTextNode("Water");
newNode.appendChild(textNode);


const myList = document.getElementById('myList');

console.log(newNode);


// myList.appendChild(newNode)
myList.insertBefore(newNode, myList.children[3])


function removeYourChild() {
    myList.removeChild(myList.firstElementChild)
}


console.log(myList.firstElementChild.nextElementSibling);
console.log(myList.lastElementChild.previousElementSibling);
