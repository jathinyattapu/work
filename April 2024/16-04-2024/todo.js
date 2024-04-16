let todoItemsContainer = document.getElementById("todoid");

let todoList = [
{
text: "HTML"
},
{
text: "CSS"
},
{
text: "JavaScript"
},
];


function f1(todo) {
    
            let todoElement = document.createElement("li");
            todoElement.classList.add("todocls");
            todoItemsContainer.appendChild(todoElement);

            let inputElement = document.createElement("input");
            inputElement.type = "checkbox";
            inputElement.id = "checkboxInput";
            inputElement.classList.add("checkbox-input");
            todoElement.appendChild(inputElement);


            let labelElement = document.createElement("label");
            labelElement.setAttribute("for", "checkboxInput");
            labelElement.classList.add("checkboxlabel");
            labelElement.textContent = todo.text;
            labelContainer.appendChild(labelElement);
}

for (let todo of todoList) {
f1(todo);
}