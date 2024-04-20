let todoItemsCon = document.getElementById("todoid");
let addtodobtn = document.getElementById("todoInput");

let todoList = [
    {    text: "HTML",id:1    },
    {    text: "CSS",id:2    },
    {    text: "JavaScript",id:3    },
];


function f1(todo) {
    
    //li creastion 
            let todoElement = document.createElement("li");
            todoElement.classList.add("todocls");
            todoItemsCon.appendChild(todoElement);
    //input creation
            let inputElement = document.createElement("input");
            inputElement.type = "checkbox";
            inputElement.id = "checkboxInput";
            inputElement.classList.add("checkbox-input");
            todoItemsCon.appendChild(inputElement);
    //labelcreation
            let labelElement = document.createElement("label");
            labelElement.setAttribute("for", "checkboxInput");
            labelElement.classList.add("checkboxlabel");
            labelElement.className = "m-2"
            labelElement.textContent = todo.text;
            todoItemsCon.appendChild(labelElement);
    //create button
            let buttonElement = document.createElement("button");
            buttonElement.setAttribute("for", "checkboxInput");
            buttonElement.textContent = "remove";
            buttonElement.className = "btn btn-danger m-2"
            buttonElement.classList.add("btnremove");
            todoItemsCon.appendChild(buttonElement);
}

    for (let todo of todoList) {
    f1(todo);
    }


    //create a todo adding
    function AddTodo() {

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
        
        
    addtodobtn.onclick = function(){
        AddTodo();
    }