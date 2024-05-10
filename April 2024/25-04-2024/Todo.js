let todoItemsCon = document.getElementById("todoid");
let addtodobtn = document.getElementById("todoInput");
// let todoList = [
//     {    text: "HTML", id:1    },
//     {    text: "CSS", id:2    },
//     {    text: "JavaScript", id:3    },
// ];



let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
let stringifiedTodoList = localStorage.getItem("todoList");
let parsedTodoList = JSON.parse(stringifiedTodoList);
if (parsedTodoList === null) {
return [];
} else {
return parsedTodoList;
}
}

let todoList = getTodoListFromLocalStorage();

saveTodoButton.onclick = function () {
localStorage.setItem("todoList", JSON.stringify(todoList));
};



let Count = todoList.length;

    //Creating Id for checked and label

    function f2(checkboxId, labelId) {
        let checkboxElement = document.getElementById(checkboxId);
        let labelElement = document.getElementById(labelId);
        labelElement.classList.toggle('checked');
        checkboxElement.classList.toggle('checked');
    }
    

    //deleting element

    function del(todoId,checkboxId,labelId,rembtn) {
        todoItemsCon.removeChild(document.getElementById(todoId));
        todoItemsCon.removeChild(document.getElementById(checkboxId));
        todoItemsCon.removeChild(document.getElementById(labelId));
        todoItemsCon.removeChild(document.getElementById(rembtn));

    }

    // Adding of Lists

    function f1(todo) {

        let todoId = 'todo' + todo.id;
        let checkboxId = 'checkbox' + todo.id;
        let labelId = 'label' + todo.id;
        let rembtn = "rembtn" + todo.id;

         //li creastion 
            let todoElement = document.createElement("li");
            todoElement.classList.add("todocls");
            todoElement.id = todoId;
            todoItemsCon.appendChild(todoElement);

         //input creation
            let inputElement = document.createElement("input");
            inputElement.type = "checkbox";
            inputElement.id = checkboxId;
            inputElement.onclick = function() {
                f2(checkboxId, labelId);
            }
                            
            inputElement.classList.add("checkbox-input");
            todoItemsCon.appendChild(inputElement);

        //labelcreation
            let labelElement = document.createElement("label");
            labelElement.id=labelId;
            labelElement.setAttribute("for", checkboxId);
            labelElement.classList.add("checkbox-label");
            labelElement.className = "m-2"
            labelElement.textContent = todo.text;
            todoItemsCon.appendChild(labelElement);

        //create button
            let buttonElement = document.createElement("button");
            buttonElement.id = rembtn;
            buttonElement.textContent = "remove";
            buttonElement.className = "btn btn-danger m-2";
            buttonElement.classList.add("btnremove");

            buttonElement.onclick = function () {
                del(todoId,checkboxId,labelId,rembtn);

            };
                
            todoItemsCon.appendChild(buttonElement);
}


    for (let todo of todoList) {
    f1(todo);
    }


    //create a todo adding
    function f3() {

        let userInput = document.getElementById("inputval");
        let userInputValue = userInput.value;

        if(userInputValue === ""){
        alert("Enter Text");
        return;
        }

        Count = Count + 1;

        let newTodo = {
        text: userInputValue,
        id: Count
        };

        f1(newTodo);
        
        userInput.value = "";
    }
        
        
    todoInput.onclick = function(){
        f3();
    }
 


    

