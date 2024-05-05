let minus = document.getElementById("minus");
let clear = document.getElementById("reset");
let plus = document.getElementById("plus");
let number = document.getElementById("number");

minus.onclick = function(){
    let a = number.textContent;
    number.textContent = a-1;
    let b = number.textContent;
    if(b>0){number.style.color = "green";}
    else if(b<0){number.style.color = "red";} else
    {number.style.color = "grey";}
}

plus.onclick = function(){
    let a = parseInt(number.textContent);
    number.textContent = a+1;
    let b = number.textContent;
    if(b>0){number.style.color = "green";}
    else if(b<0){number.style.color = "red";} else
    {number.style.color = "grey";}
}

clear.onclick = function(){
    number.textContent = 0;
    number.style.color = "grey";
}

