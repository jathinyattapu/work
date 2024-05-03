let todocontainer = document.getElementById("todocontainer");
let addtodo = document.getElementById("addtodo");
let saveTodoButton = document.getElementById("saveTodoButton");


// let todoList = [
//     {text : "Jathin",id :1},
//     {text : "Suresh",id :2},
//     {text : "Lakshmi",id :3},
//     {text : "Ravi",id :4}
// ]
let todoList = getTodoListFromLocalStorage();
console.log(todoList);
let todosCount = todoList.length;


saveTodoButton.onclick = function () {
localStorage.setItem("todoList", JSON.stringify(todoList));
};

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
    return [];
    } else {
    return parsedTodoList;
    }
}
    

// For Adding the todos fron an array
function f1(todo){
    // creating ids
    let todoId = 'todo' + todo.id;
    let checkboxId = 'checkbox' + todo.id;
    let labelId = 'label' + todo.id;


    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("licontainer","py-2");
    // todoElement.style.listStyle = "none";
    todocontainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId; 

    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId); //for line through while clicked(toggle)
    }   

    inputElement.classList.add("check-box");
    todoElement.appendChild(inputElement);

    let lableElement = document.createElement("label");
    lableElement.textContent = todo.text;
    lableElement.id = labelId;
    lableElement.setAttribute("for", checkboxId)
    lableElement.classList.add("labelele","px-5");
    todoElement.appendChild(lableElement);

    let delElement = document.createElement("button");
    delElement.id = "del";
    delElement.textContent = "Del";
    delElement.className = "btn"
    delElement.classList.add("btn-danger");
    todoElement.appendChild(delElement);

    delElement.onclick = function () { //For Deleting the li element
        del(todoId);
    };
    
}


if(todoList!=[]){
for(let todo of todoList){
    f1(todo);
}}

let count = todoList.length;

addtodo.onclick = function(){   
    f2();
}

// adding new todo in li
function f2(){
    let userInputElement = document.getElementById("inputtodo");
    let userInputValue = userInputElement.value;
    if(userInputValue === ""){
    alert("Enter Valid Text");
    return;
    }

    count = count + 1;
    // new item adding in todo list
    let newtodo = { text: userInputValue,
        id: count};
    
    todoList.push(newtodo);
    f1(newtodo);
    userInputElement.value = "";
}

// function for deleting li 
function del(todoId){
    let eledel = document.getElementById(todoId);
    todocontainer.removeChild(eledel);    

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.id;
        if (eachTodoId === todoId) {
        return true;
        } else {
        return false;
        }
        });
        todoList.splice(deleteElementIndex, 1);
        
}

//for line through while clicked(toggle)
function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('checked');
}
