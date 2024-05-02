console.log("Hello! World");

let x = 10;
console.log(x);

let y = 20;
const z = 30;

console.log(y+z);
console.log(y);
console.log(z);

document.getElementById("role").textContent= "freelancer"

function f1(){
    document.getElementById("name").textContent="Jathin Kumar Reddy";  
}

let cars = ["Saab", 1, "BMW", 2];

console.log(cars);

console.log(cars.pop());

console.log(cars.length);

console.log(cars.push("9999"));

function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
    }
    displayGreeting(function() {
        console.log("Rahul");
    });

    function displayGreeting(displayName) {
        console.log("Hello");
        displayName();
        console.log("Good Morning!");
        }

    function displayRahul() {
    console.log("Rahul");
    }
    displayGreeting(displayRahul);

    function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
    }
    let displayRam = function() {
        console.log("Ram");
    };
    displayGreeting(displayRam);
