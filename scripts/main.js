


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
      
          iconDelete.addEventListener("click", function (e) {
              let taskIndex = Array.from(tasksContainer.children).indexOf(newTaskContainer);
              tasksContainer.removeChild(newTaskContainer);

              deleteTask(e);
              
              let deletedTask = tasksList.splice(taskIndex, 1)[0];
              completedTasksList.push(deletedTask);
            
              window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
              window.localStorage.setItem("Completed tasks name", JSON.stringify(completedTasksList));
            });
      
          newTaskInput.addEventListener("change", () => handleChange(i));
        }
  } 
  const completedTasksJson = localStorage.getItem("Completed tasks name");
  const completedTasks = JSON.parse(completedTasksJson);

  if (completedTasks) {
    for (let i = 0; i < completedTasks.length; i++) {
      // create new input element for completed task
      let newTaskInput = document.createElement("input");
      newTaskInput.classList.add("input-style", "task-content", "completed-task");
      newTaskInput.id = `completed-task-${i}`;
      newTaskInput.type = "text";
      newTaskInput.value = completedTasks[i];
      newTaskInput.readOnly = true; // make the input read-only

     
     
      
      // create a new div element for the input element
      let newTaskContainer = document.createElement("div");
      newTaskContainer.classList.add("new-task-container");
      
      // append input element to the new div element
      
      newTaskContainer.appendChild(newTaskInput);
      
      // append new div element to #completed-tasks-container
      tasksCompletedContainer.appendChild(newTaskContainer);
      
      
      completedTasksList.push(completedTasks[i]);
    }
  }
}

function handleChange(index) {
  const newTaskInput = document.getElementById(`task-${index}`);
  if (newTaskInput) {
      const newTaskContent = newTaskInput.value;
      tasksList[index] = newTaskContent;
      window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
  }
}

//Generate the page
const listTasksJson = (localStorage.getItem("Tasks name") !== null);
if (listTasksJson){
    genererTasks();
}

formAddTask.addEventListener("submit", function (e) {
  e.preventDefault();
  let taskContent = inputNewTask.value;
  if (!taskContent) {
    alert("Veuillez remplir le champs");
  } else {
    inputNewTask.value = "";
    let newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-task-container");
    let newTaskInput = document.createElement("input");
    newTaskInput.classList.add("input-style", "task-content");
    newTaskInput.id = "task-" + tasksID;
    newTaskInput.type = "text";
    newTaskInput.value = taskContent;

    let iconDelete = document.createElement("i");
    iconDelete.classList.add("fa-regular", "fa-circle", "btn-style");

    tasksContainer.appendChild(newTaskContainer);
    newTaskContainer.appendChild(iconDelete);
    newTaskContainer.appendChild(newTaskInput);

    tasksList.push(taskContent);
    window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));

    iconDelete.addEventListener("click", function (e) {
      let taskIndex = Array.from(tasksContainer.children).indexOf(
        newTaskContainer
      );
      tasksContainer.removeChild(newTaskContainer);
      deleteTask(e);
      let deletedTask = tasksList.splice(taskIndex, 1)[0];
      completedTasksList.push(deletedTask);

      window.localStorage.setItem("Tasks name",JSON.stringify(tasksList));
      window.localStorage.setItem("Completed tasks name",JSON.stringify(completedTasksList));
    });

    newTaskInput.addEventListener("change", function () {
      const index = tasksList.indexOf(taskContent);
      const newTaskContent = newTaskInput.value;
      tasksList[index] = newTaskContent;
      window.localStorage.setItem("Tasks name", JSON.stringify(tasksList));
    });
  }
});


function deleteTask(e) {
  const task = e.target.parentNode;
  const taskName = task.querySelector(".task-content").value;

  task.remove();

  const completedTask = document.createElement("div");
  completedTask.classList.add("new-task-container");
  tasksCompletedContainer.appendChild(completedTask);

  let newTaskCompletedInput = document.createElement("input");
  newTaskCompletedInput.classList.add("input-style", "task-content", "completed-task");
  newTaskCompletedInput.id = "task-" + tasksID;
  newTaskCompletedInput.type = "text";
  newTaskCompletedInput.innerText = taskName;
  newTaskCompletedInput.value = taskName;
  completedTask.appendChild(newTaskCompletedInput);

}

let deleteDefAllCompletedTasks = document.querySelector("#deleteDefBtn");

deleteDefAllCompletedTasks.addEventListener("click", function() {
  let completedTasksContainer = document.querySelector("#completed-tasks-container");
  let completedTasks = completedTasksContainer.querySelectorAll("#completed-tasks-container > .new-task-container");

  completedTasks.forEach(function(completedTask) {
    completedTasksContainer.removeChild(completedTask);
  });

  localStorage.removeItem("Completed tasks name");
});

