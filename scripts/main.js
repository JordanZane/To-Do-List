let inputNewTask = document.querySelector("#new-task-input");
let tasksContainer = document.querySelector("#tasks-container");
let formAddTask = document.querySelector("#form-add-task");

let tasksList = [];
let completedTasksList = [];
let tasksID = 1;

function genererTasks(){
    const listTasksJson = window.localStorage.getItem("Tasks name");
    const listTasks = JSON.parse(listTasksJson);

    for(let i = 0; i < listTasks.length; i++){
        
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("new-task-container");
        let newTaskInput = document.createElement("input");
        newTaskInput.classList.add("input-style", "task-content");
        newTaskInput.id = "task-" + tasksID;
        tasksID = tasksID + 1;
        newTaskInput.type = "text";
        newTaskInput.value = listTasks[i];
        newTaskInput.textContent = listTasks[i].value;
        
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("fa-regular", "fa-circle", "btn-style");

        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(iconDelete);
        newTaskContainer.appendChild(newTaskInput);
        
        tasksList.push(listTasks[i]);

       

        /*iconDelete.addEventListener("click", function(){
            let completedTasksContainer = document.querySelector("#completed-tasks-container");
            tasksContainer.removeChild(newTaskContainer);
            completedTasksContainer.appendChild(newTaskContainer);
            tasksList.splice(i,1);
            window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
            
        });*/

        newTaskInput.addEventListener("change", function () {
            updateTaskInLocalStorage(i, newTaskInput.value);
          });
    }
}



//Update the value of the task on change event
function updateTaskInLocalStorage(index, newValue) {
    tasksList[index] = newValue;
    window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
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
        newTaskInput.classList.add("input-style" , "task-content");
        newTaskInput.id = "task-" + tasksID;
        tasksID = tasksID + 1;
        newTaskInput.type = "text";
        newTaskInput.value = taskContent;
        newTaskInput.textContent = taskContent.value;
        
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("fa-regular", "fa-circle", "btn-style");

        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(iconDelete);
        newTaskContainer.appendChild(newTaskInput);
        

        tasksList.push(taskContent);
        window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));

        newTaskInput.addEventListener("change", function () {
            updateTaskInLocalStorage(tasksList.length - 1, newTaskInput.value);
          });
    }
})




// window.localStorage.removeItem("Tasks name");

