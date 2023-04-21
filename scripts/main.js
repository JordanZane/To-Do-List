/*Loading Page*/ 

/*Add a new list*/
let newListForm = document.getElementById("new-list-form");
let newListInput = document.getElementById("new-list-input");
let newListSubmit = document.getElementById("new-list-submit");
let lists = document.getElementById("lists-container");

newListForm.addEventListener("submit", function(e){
    e.preventDefault();
    const newListName = newListInput.value;

    if(!newListName) {
        alert('Veuillez remplir le champs');
    }else{
        newListInput.value = "";
    }

    let newListContainer = document.createElement("div");
    newListContainer.classList.add("list");
    
    lists.appendChild(newListContainer);
})
