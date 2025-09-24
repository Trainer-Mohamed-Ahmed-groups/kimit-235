var myBtn = document.getElementById('myBtn'),
    myInput = document.getElementById('myInput'),
    output = document.getElementById('output'),
    myForm = document.forms[0];


function sayHello() { console.log("Hello"); }


// myBtn.onclick = sayHello
// myBtn.onclick = () => console.log("This is another");


// myBtn.addEventListener('click', sayHello)
// myBtn.addEventListener('click', () => console.log("This is another"))




// myBtn.addEventListener('dblclick', () => console.log("This is another"))
// myBtn.addEventListener('contextmenu', () => console.log("This is another"))
// myBtn.addEventListener('contextmenu', () => console.log("This is another"))


// myInput.addEventListener('focus', () => console.log("OK"))
// myInput.addEventListener('blur', () => console.log("OK"))

// myInput.addEventListener('keyup', (e) => output.textContent = e.target.value)
// myInput.addEventListener('keypress', (e) => output.textContent = e.target.value)
// myInput.addEventListener('keydown', (e) => output.textContent = e.target.value)


// myInput.addEventListener('change', (e) => output.textContent = e.target.value)
myInput.addEventListener('change', (e) => output.textContent = `<span>${e.target.value}</span>`)



myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("test")
})

// alert("sdfsdf")
window.onload = () => console.log("Loaded");


/************************************************* */

var myUl = document.getElementsByTagName('ul')[0];


for (let index = 0; index < myUl.children.length; index++) {
    const element = myUl.children[index];
    element.onclick = (ev) => console.log(ev.target.innerHTML);
}



/****************************************************************** */
/***************************************************** */
var taskInput = document.getElementById('taskInput');
var tasksOutput = document.getElementById('tasksOutput');
var tasksCounter = document.getElementById('tasksCounter');

console.log(taskInput);
console.log(tasksOutput);


function addNewTask() {
    finishTask()
    if (taskInput.value !== "") {
        tasksOutput.innerHTML += `<li class="list-group-item">${taskInput.value}</li>`
        afterAdd();
    }
    else {
        alert("Please enter a valid task")
    }
}


for (let index = 0; index < tasksOutput.children.length; index++) {
    const element = tasksOutput.children[index];
    console.log(element);
    element.addEventListener('click', (ev) => console.log(ev.target))
}

function removeAllTasks() {

    if (confirm("Are you sure you want to delete all tasks?")) {
        tasksOutput.innerHTML = ""
    }
    else { }
}

function afterAdd() {
    taskInput.value = ""
    taskInput.focus()
    tasksCounter.textContent = tasksOutput.children.length
}



// Tasks counter
// Finish task
