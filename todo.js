const todoSubmit = document.querySelector(".todoSubmit");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todo-list");
const addnote = document.querySelector(".addnote");
const section = document.querySelector("#section");
let changeFilename = document.querySelector("#fileName");
const noteContainer = document.querySelector(".container");

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
        changeFilename.innerHTML = input.value;
        form.style.display = "none";
        
    });
    
    form.appendChild(input);
    form.method = "post";
    changeFilename.appendChild(form);
}, { once: true });
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
        changeFilename.innerHTML = input.value;
        alert("filename saved hehe");
    });

    form.appendChild(input);
    form.method = "post";
    changeFilename.appendChild(form);
}, { once: true });


function addTodo(event) {
    event.preventDefault();
    const shapeContainer = document.createElement("div");
    shapeContainer.classList.add("taskDiv");
    noteContainer.appendChild(shapeContainer);
    const shapeHeader = document.createElement("h5");
    shapeContainer.appendChild(shapeHeader);
    shapeHeader.innerHTML = todoInput.value;

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
    $(noteContainer).sortable({
        delay: 300,
        distance: 50
    });


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

const taskDiv = document.querySelector(".taskDiv");

function addNote() {
    event.preventDefault();

    const addsection = document.createElement("section");
    addsection.classList = "addsectionSticky";
    const notepad = document.createElement("div");
    notepad.classList.add("noteheader");

    const stickynote = document.createElement("div");
    stickynote.classList.add("stickynote");
    const text = document.createElement("textarea");
    text.placeholder = " Write a note..."
    text.rows = 11;
    text.cols = 26;
    stickynote.appendChild(text);
    addsection.appendChild(notepad);
    addsection.appendChild(stickynote);
    noteContainer.appendChild(addsection);
    $(".addsectionSticky").draggable({
        containment: "parent",
        snap: true,
        // snapTolerance: 50,
        // grid: [220 ,220]
    });
}