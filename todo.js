const todoSubmit = document.querySelector(".todoSubmit");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todo-list");
const addnote = document.querySelector(".addnote");
const section = document.querySelector("#section");
const changeFilename = document.querySelector("#fileName");

todoSubmit.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);
addnote.addEventListener("click", addNote);
changeFilename.addEventListener("click", function() {
    changeFilename.innerHTML = "";
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter new filename";
    input.id = "inputId";
    const submit = document.createElement("input");
    submit.type = "submit";

    form.addEventListener("submit", (e) => { 
        e.preventDefault();
        changeFilename = input.innerHTML;
        form.style.display = none;
    });
    
    form.appendChild(input);
    form.method = "post";
    changeFilename.appendChild(form);
}, { once: true });


function addTodo(event) {
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

    if (todoInput.value === "") {} else {
        todoList.appendChild(todoDiv);
    }
    todoInput.value = "";



}

function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === "deleteButton") {
        const li = item.parentElement;
        li.classList.add("fall");
        setTimeout(() => {
            li.remove();
        }, 400);
    }

    if (item.classList[0] === "checkedButton") {
        const li = item.parentElement;
        li.classList.toggle("completed");
    }
}


const noteContainer = document.querySelector(".container");

function addNote() {
    event.preventDefault();

    const addsection = document.createElement("section");
    addsection.classList = "addsectionSticky";
    const notepad = document.createElement("div");
    notepad.classList.add("noteheader");

    const stickynote = document.createElement("div");
    stickynote.classList.add("stickynote");
    const text = document.createElement("textarea");
    text.placeholder = "Write a note..."
    text.rows = 11;
    text.cols = 26;
    stickynote.appendChild(text);
    // noteContainer.appendChild(notepad);
    // noteContainer.appendChild(stickynote);
    addsection.appendChild(notepad);
    addsection.appendChild(stickynote);
    noteContainer.appendChild(addsection);
}