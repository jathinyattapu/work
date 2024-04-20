
    let counterValue = document.getElementById("counterValue");
    let incrementBtn = document.getElementById("incrementBtn");
    let clickCount = localStorage.getItem("clickCount");

    if (clickCount !== null) {
        counterValue.textContent = clickCount;
    } else {
        clickCount = 0; 
    }

    function f1() {
        clickCount++;
        counterValue.textContent = clickCount;
        localStorage.setItem("clickCount", clickCount);
    };