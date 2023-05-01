let inputNewTask = document.querySelector("#new-task-input");
let tasksContainer = document.querySelector("#tasks-container");
let tasksCompletedContainer = document.querySelector("#completed-tasks-container");
let formAddTask = document.querySelector("#form-add-task");

let tasksList = [];
let completedTasksList = [];
let tasksID = Date.now();

function genererTasks() {
  const listTasksJson = localStorage.getItem("Tasks name");
  const listTasks = JSON.parse(listTasksJson);

if(listTasks) {
    for (let i = 0; i < listTasks.length; i++) {
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("new-task-container");
        let newTaskInput = document.createElement("input");
        newTaskInput.classList.add("input-style", "task-content");
        newTaskInput.id = `task-${i}`;
        newTaskInput.type = "text";
        newTaskInput.value = listTasks[i];
        newTaskInput.textContent = listTasks[i].value;
    
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("fa-regular", "fa-circle", "btn-style");
    
        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(iconDelete);
        newTaskContainer.appendChild(newTaskInput);
    
        tasksList.push(listTasks[i]);
    
        iconDelete.addEventListener("click", function () {
            let taskIndex = Array.from(tasksContainer.children).indexOf(newTaskContainer);
            tasksContainer.removeChild(newTaskContainer);
            tasksCompletedContainer.appendChild(newTaskContainer);
          
            let deletedTask = tasksList.splice(taskIndex, 1)[0];
            completedTasksList.push(deletedTask);
          
            window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
            window.localStorage.setItem("Completed tasks name", JSON.stringify(completedTasksList));
          });
    
        newTaskInput.addEventListener("change", () => handleChange(i));
      }
} 
}

function handleChange(index) {
    const newTaskContent = document.getElementById(`task-${index}`).value;
    tasksList[index] = newTaskContent;
    window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
}

function updateTaskIndex(oldIndex, newIndex) {
    // update the tasksList array to reflect the new index
    const task = tasksList.splice(oldIndex, 1)[0];
    tasksList.splice(newIndex, 0, task);
  
    // remove the old task from the completedTasksList array
    const completedTask = completedTasksList.splice(oldIndex, 1)[0];
  
    // insert the completed task into its new index in the completedTasksList array
    completedTasksList.splice(newIndex, 0, completedTask);
  
    // remove the old event listener
    const oldInput = document.getElementById(`task-${oldIndex}`);
    oldInput.removeEventListener('change', () => handleChange(oldIndex));
  
    // update the input element with the new index
    const newInput = document.getElementById(`task-${newIndex}`);
    newInput.id = `task-${newIndex}`;
  
    // add a new event listener with the updated index
    newInput.addEventListener('change', () => handleChange(newIndex));
  
    // update the localStorage for both arrays
    window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
    window.localStorage.setItem("Completed tasks name", JSON.stringify(completedTasksList));
  }

//Generate the page
const listTasksJson = (localStorage.getItem("Tasks name") !== null);
if (listTasksJson){
    genererTasks();
}

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
        
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("fa-regular", "fa-circle", "btn-style");

        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(iconDelete);
        newTaskContainer.appendChild(newTaskInput);
        
        tasksList.push(taskContent);
        window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));

        iconDelete.addEventListener("click", function () {
            let taskIndex = Array.from(tasksContainer.children).indexOf(newTaskContainer);
            tasksContainer.removeChild(newTaskContainer);
            tasksCompletedContainer.appendChild(newTaskContainer);
          
            let deletedTask = tasksList.splice(taskIndex, 1)[0];
            completedTasksList.push(deletedTask);
          
            window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
            window.localStorage.setItem("Completed tasks name", JSON.stringify(completedTasksList));
          });

        newTaskInput.addEventListener("change", function () {
            handleChange(tasksList.length - 1);
        });
    }
})
