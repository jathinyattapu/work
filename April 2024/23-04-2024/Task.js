//First task

let array = [3, 4, 5 ];
console.log(array.includes(4));

let b = [9.8 , "Hello", true ];
console.log(b.includes("Hai"));

//Second Task
let d = [11 , 22 , 33 ];

console.log(d.indexOf(44));

let e = ["a", "b", "c", "a"];
console.log(e.indexOf("a"));

let f = ['a','b','c','b','a'];
console.log(f.indexOf('a'));

//Task 3

let g =[23 , 4.5 , "Asia" , 7 , "Europe" ];
let h ="Asia"

console.log(g.find((g) => g === h));

let i =[true , 5.5 , 55 , 555 ]

let j ="Asia"

console.log(i.find((i) => i === j));



document.addEventListener('DOMContentLoaded', function() {
    const startIndexInput = document.getElementById('startIndexInput');
    const deleteCountInput = document.getElementById('deleteCountInput');
    const itemToAddInput = document.getElementById('itemToAddInput');
    const spliceBtn = document.getElementById('spliceBtn');
    const updatedArraySpan = document.getElementById('updatedArray');

    let myArray = [1, 2, 3, 4, 5];

    function updateAndDisplayArray() {
        const startIndex = parseInt(startIndexInput.value);
        const deleteCount = parseInt(deleteCountInput.value);
        const itemToAdd = itemToAddInput.value;

        if (isNaN(startIndex) || startIndex < 0) {
            alert('Please enter a valid start index.');
            return;
        }

        myArray.splice(startIndex, deleteCount, itemToAdd);

        const updatedArrayString = JSON.stringify(myArray);

        updatedArraySpan.textContent = updatedArrayString;
    }

    spliceBtn.addEventListener('click', updateAndDisplayArray);
});


//Last Task
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const findBtn = document.getElementById('findBtn');
    const indexOfNumberSpan = document.getElementById('indexOfNumber');

    const numbers = [10, 20, 30, 40, 50];

    function findIndexOfNumber() {
        const valueToFind = parseInt(userInput.value);

        if (isNaN(valueToFind)) {
            alert('Please enter a valid number.');
            return;
        }

        const index = numbers.findIndex(num => num === valueToFind);

        if (index !== -1) {
            indexOfNumberSpan.textContent = `Index of ${valueToFind} is ${index}.`;
        } else {
            indexOfNumberSpan.textContent = `${valueToFind} not found in the array.`;
        }
    }

    findBtn.addEventListener('click', findIndexOfNumber);
});


