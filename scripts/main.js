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

       