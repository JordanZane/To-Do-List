/*Loading Page*/


/*Add a new list*/
/*
let newListForm = document.getElementById("new-list-form");
let newListInput = document.getElementById("new-list-input");
let newListSubmit = document.getElementById("new-list-submit");
let lists = document.getElementById("lists-container");

let namesList = [];
function genererLists(){
    
    const namesListJson = localStorage.getItem("Names List"); 
    const namesList = JSON.parse(namesListJson);
   
    for(let i = 0; i < namesList.length; i++){
        let newListContainer = document.createElement("div");
        newListContainer.classList.add("list");
        let listIcon = document.createElement("i")
        listIcon.classList.add("fa-solid", "fa-bars");
        let listName = document.createElement("input");
        listName.classList.add("list-name", "input-style");
        listName.value = namesList[i];
        
        lists.appendChild(newListContainer);
        newListContainer.appendChild(listIcon);
        newListContainer.appendChild(listName);
        
    }
}

genererLists();

newListForm.addEventListener("submit", function(e){
    e.preventDefault();
    const newListName = newListInput.value;

    if(!newListName) {
        alert('Veuillez remplir le champs');
    }else{
        newListInput.value = "";
        
        let newListContainer = document.createElement("div");
        newListContainer.classList.add("list");
        let listIcon = document.createElement("i")
        listIcon.classList.add("fa-solid", "fa-bars");
        let listName = document.createElement("input");
        listName.classList.add("list-name", "input-style");
        listName.value = newListName;
        listName.textContent = newListName.value;
        
        lists.appendChild(newListContainer);
        newListContainer.appendChild(listIcon);
        newListContainer.appendChild(listName);

        namesList.push(newListName);
        localStorage.setItem("Names List", JSON.stringify(namesList));
    }
})

*/


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
        iconDelete.classList.add("fa-solid", "fa-trash", "btn-style");

        tasksContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskInput);
        newTaskContainer.appendChild(iconDelete);

        tasksList.push(listTasks);
    }
}

//Listener add new task
formAddTask.addEventListener("submit", function(e){
    e.preventDefault();
    let taskContent = inputNewTask.value;
    if(!taskContent){
        alert("Veuillez remplir le champs");
    }else{
        taskContent.value = "";
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

genererTasks();

