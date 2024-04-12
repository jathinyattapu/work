
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const userInputElement = document.getElementById('userInput');
    const gameResultElement = document.getElementById('gameResult');
    const checkButton = document.getElementById('checkButton');
    const restartButton = document.getElementById('restartButton');

    function generateRandomNumbers() {
        const num1 = Math.floor(Math.random() * 10) + 1; 
        const num2 = Math.floor(Math.random() * 10) + 1; 
        firstNumberElement.textContent = num1;
        secondNumberElement.textContent = num2;
    }

    function checkAnswer() {
        const num1 = parseInt(firstNumberElement.textContent);
        const num2 = parseInt(secondNumberElement.textContent);
        const userAnswer = parseInt(userInputElement.value);

        if (userAnswer === num1 + num2) {
            gameResultElement.textContent = "Correct! Well done!";
        } else {
            gameResultElement.textContent = "Wrong answer. Try again!";
        }
    }

    function f1() {
        checkAnswer();
    };

    function f2() {
        gameResultElement.textContent = "";
        generateRandomNumbers();
        userInputElement.value = "";
    };

    generateRandomNumbers();

