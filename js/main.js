console.log(window.document);
console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.characterSet);
console.log(document.title);
console.log(document.images);
console.log(document.forms);

// ///////////////////////////////////////////
console.log(document.getElementById("myId"));

console.log(document.getElementById("myIdsdfsdfdf"));

console.log(document.getElementsByClassName("myClass"));


console.log(document.getElementsByClassName("myClasssdfsdfsdf"));


console.log(document.getElementsByTagName("div").myId);
////////////////////////////////////////////////////////////
var myInputs = document.getElementsByTagName("input");

var myCustomInput = myInputs[0],
    myCustomInput2 = myInputs[1],
    myBtn = document.getElementsByTagName('button')[0],
    output = document.getElementById('output');
console.log(myCustomInput);

function changeType() {
    if (myCustomInput.getAttribute('type') === 'text') {
        myCustomInput.setAttribute("type", "password");
        myBtn.innerHTML = "Show";
    }
    else {
        myCustomInput.setAttribute("type", "text");
        myBtn.innerHTML = "Hide";
    }
}


console.log(myCustomInput2.value);

var showValue = () => output.innerHTML = `<h2>${myCustomInput2.value}</h2>`
//////////////////////////////////////////////////
console.log(document.querySelector("#myId"));
console.log(document.querySelector("div"));

var mySpan = document.querySelectorAll('div>span')
mySpan[0].innerHTML = mySpan[0].innerHTML.toUpperCase() + mySpan[0].innerHTML.length

var newDivision = document.getElementById('newDivision')

console.log(newDivision.innerText);
console.log(newDivision.innerHTML);
console.log(newDivision.outerHTML);

/********************************************************* */
var myNewInput = document.getElementById('input1'),
    myNewSpan = document.getElementById('output1');


console.log(myNewInput);
console.log(myNewSpan);
var testPassword = () => {
    if (myNewInput.value.length < 8) {
        myNewSpan.innerHTML = "<span class='red'>Weak password</span>"
    }
    else {
        myNewSpan.innerHTML = "<span class='green'>Good password</span>"
    }
}
/***************************************************** */
var taskInput = document.getElementById('taskInput');
var tasksOutput = document.getElementById('tasksOutput');

console.log(taskInput);
console.log(tasksOutput);
function addNewTask() {
    if (taskInput.value !== "") {
        tasksOutput.innerHTML += `<li class="list-group-item">${taskInput.value}</li>`
        taskInput.value = ""
        taskInput.focus()
    }
    else {
        alert("Please enter a valid task")
    }
}


function removeAllTasks() {

    if (confirm("Are you sure you want to delete all tasks?")) {
        tasksOutput.innerHTML = ""
    }
    else { }
}
