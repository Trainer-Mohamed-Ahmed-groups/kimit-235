var tasks_input = document.getElementById("taskInput"),
    tasks_output = document.getElementById("tasksOutput"),
    tasks_counter = document.getElementById("tasksCounter"),
    finished_tasks_counter = document.getElementById("finishedTasksCounter"),
    tasksContent = [];



tasks_input.addEventListener('keyup', (ev) => {
    if (ev.key === "Enter") {
        if (tasks_input.value.trim() !== "") {
            addTask(ev);
            deleteTask();
            afterAddingTask()
            updateFinishedTasksCounter()
        }
        else {
            alert("Please enter a task.");
        }
    }
})


function addTask(ev) {
    tasks_output.innerHTML +=
        `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <span>${ev.target.value}</span>
        <svg xmlns="http://www.w3.org/2000/svg" id='delete-${tasks_output.children.length}' width="16" height="16" fill="#F00" class="bi bi-trash3-fill trash" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
        </svg>
    </li>`;
    tasksContent.push(ev.target.value);
}

function updateFinishedTasksCounter() {
    var finished_tasks = document.getElementsByClassName('bg-success');
    finished_tasks_counter.innerHTML = finished_tasks.length;

    var tasks = tasks_output.children;
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        task.onclick = function () {
            this.classList.toggle('bg-success');
            var finished_tasks = document.getElementsByClassName('bg-success');
            finished_tasks_counter.innerHTML = finished_tasks.length;
        }
    }
}


function afterAddingTask() {
    tasks_input.value = "";
    tasks_counter.innerHTML = tasks_output.children.length;
}

function deleteTask() {
    var trash_icons = document.getElementsByClassName('trash');
    for (let i = 0; i < trash_icons.length; i++) {
        const icon = trash_icons[i];
        icon.onclick = function (ev) {
            // console.log(tasksContent.filter(item => item !== this.parentElement.children[0].textContent));

            // console.log(tasksContent[i]);
            // console.log(tasksContent.filter(item => item !== tasksContent[i]));



            this.parentElement.remove();
            ev.stopPropagation();
            afterAddingTask();
            updateFinishedTasksCounter();


            // console.log(tasks_output.children);
            // console.log(this.parentElement);
            // console.log(tasks_output.children.filter(item => item !== this.parentElement));
        }
    }
}
