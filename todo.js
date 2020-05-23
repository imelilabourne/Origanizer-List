const todoSubmit = document.querySelector(".todoSubmit");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todo-list");
const addnote = document.querySelector(".addnote");
const section = document.querySelector("#section");
const changeFilename = document.querySelector("#fileName");

todoSubmit.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);
addnote.addEventListener("click", addNote);
changeFilename.addEventListener("click", function(){
    changeFilename.innerHTML= "Saved! ";
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    form.appendChild(input);
    form.method = "post";
    changeFilename.appendChild(form);
});

function addTodo(event){
    event.preventDefault(); 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);

    const checkedButton = document.createElement("button");
    checkedButton.classList.add("checkedButton");
    checkedButton.innerHTML = '<li class="fas fa-check"></li>'
    todoDiv.appendChild(checkedButton);


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = '<li class="fas fa-trash"></li>'
    todoDiv.appendChild(deleteButton);

    if(todoInput.value === ""){
    }
    else{
        todoList.appendChild(todoDiv);
    }
    todoInput.value = "";



}

function deleteItem(e){
    const item = e.target;
    if (item.classList[0] === "deleteButton"){
        const li = item.parentElement;
        li.classList.add("fall");
        setTimeout(()=> {
            li.remove();
        }, 400);
    }

    if (item.classList[0] === "checkedButton"){
        const li = item.parentElement;
        li.classList.toggle("completed");
    }
}

function addNote(){
    const addsection = document.createElement("section");
    addsection.classList.add("addsection");
    
    const notepad = document.createElement("div");
    notepad.classList.add("noteheader");
    
    const stickynote = document.createElement("div");
    stickynote.classList.add("stickynote");
    const text = document.createElement("textarea");
    text.placeholder = "Write a note..."
    stickynote.appendChild(text);
   
    addsection.appendChild(notepad);
    addsection.appendChild(stickynote);
    section.append(addsection);
}