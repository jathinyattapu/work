let todoitemcontainer = document.getElementById("todoitemcontainer");
let addtodo = document.getElementById("btn1");

let todolist = [
    {text: "HTML", id:1},
    {text: "CSS", id:2},
    {text: "JS", id:3},
]

//for adding items in Todolist
for(let todo of todolist){
    f1(todo);
}


//creating and appending in to list
function f1(todo){

    let todoId = 'todo' + todo.id;
    let checkboxId = 'checkbox' + todo.id;
    let labelId = 'label' + todo.id;


    let todoElement = document.createElement("li");
    todoElement.classList.add("li-item");
    todoElement.id = todoId;
    todoElement.className = "p-2"
    todoitemcontainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    //creating event for checked 
    // inputElement.onclick = function(){
    //     f3(checkboxInput,labelId);
    // }

    inputElement.classList.add("checkbox-input");
    todoitemcontainer.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.className = "px-2"
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    todoitemcontainer.appendChild(labelElement);
    
    let deleteElement = document.createElement("button");
    deleteElement.id= "delbtn";
    deleteElement.className= "btn btn-danger";
    deleteElement.textContent = "Delete";
    deleteElement.classList.add("delElement");
    deleteElement.onclick = function(){
        del(todoId);
    }
    todoitemcontainer.appendChild(deleteElement);

    
}


//delete todolist

function del(todoId){
    
    let del1 = document.getElementById(todoId);
    todoitemcontainer.removeChild(del1);
}

//for checkbox checked
let todocount = todolist.length;

function f3(checkboxInput,labelId){
    let checkboxElement = document.getElementById(checkboxInput);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('checked');
    
}

function f2() {
    let userInputElement = document.getElementById("textbox1");
    let userInputValue = userInputElement.value;
    if(userInputValue === ""){
    alert("Enter Valid Text");
    return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
    text: userInputValue,
    id: todosCount
    };

    f1(newTodo);
    userInputElement.value = "";
}

btn1.onclick = function(){
f2();
}