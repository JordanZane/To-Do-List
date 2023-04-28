let inputNewTask = document.querySelector("#new-task-input");
let tasksContainer = document.querySelector("#tasks-container");
let formAddTask = document.querySelector("#form-add-task");

let tasksList = [];

function genererTasks(){
    const listTasksJson = window.localStorage.getItem("Tasks name");
    const listTasks = JSON.parse(listTasksJson);
    for(let i = 0; i < listTasks.length; i++){
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("new-task-container");
        let newTaskInput = document.createElement("input");
        newTaskInput.classList.add("input-style");
        newTaskInput.type = "text";
        newTaskInput.value = listTasks[i];
        newTaskInput.textContent = listTasks[i].value;
        
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("fa-solid", "fa-circle", "btn-style");

        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskInput);
        newTaskContainer.appendChild(iconDelete);

        tasksList.push(listTasks[i]);
    }
}

//Generate the page
const listTasksJson = (localStorage.getItem("Tasks name") !== null);
if (listTasksJson){
    genererTasks();
}


//Listener add new task
formAddTask.addEventListener("submit", function(e){
    e.preventDefault();
    let taskContent = inputNewTask.value;
    if(!taskContent){
        alert("Veuillez remplir le champs");
    }else{
        inputNewTask.value = "";
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("new-task-container");
        let newTaskInput = document.createElement("input");
        newTaskInput.classList.add("input-style");
        newTaskInput.type = "text";
        newTaskInput.value = taskContent;
        newTaskInput.textContent = taskContent.value;
        
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("fa-solid", "fa-circle", "btn-style");

        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskInput);
        newTaskContainer.appendChild(iconDelete);

        tasksList.push(taskContent);
        window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
    }
})

//window.localStorage.removeItem("Tasks name");

