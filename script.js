let display = document.getElementById("display");

let current = "";
let firstNumber = null;
let operator = null;
let waitingSecondNumber = false;

// حافظه ماشین حساب
let memory = Number(localStorage.getItem("memory")) || 0;

// تاریخچه
let history = JSON.parse(localStorage.getItem("history")) || [];

showHistory();

function appendNumber(number){

    if(waitingSecondNumber){

        current = number;
        waitingSecondNumber = false;

    }else{

        current += number;

    }

    display.value = current;

}

function appendDot(){

    if(current.indexOf(".") === -1){

        if(current === ""){

            current = "0.";

        }else{

            current += ".";

        }

        display.value = current;

    }

}

function appendOperator(op){

    if(current === "") return;

    if(firstNumber === null){

        firstNumber = Number(current);

    }else if(!waitingSecondNumber){

        calculate();

    }

    operator = op;
    waitingSecondNumber = true;

}

function calculate(){

    if(operator === null || waitingSecondNumber) return;

    let secondNumber = Number(current);

    let result = 0;

    switch(operator){

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if(secondNumber === 0){

                alert("تقسیم بر صفر امکان پذیر نیست.");

                allClear();

                return;

            }

            result = firstNumber / secondNumber;

            break;

    }

    display.value = result;

    addHistory(firstNumber + " " + operator + " " + secondNumber + " = " + result);

    current = String(result);

    firstNumber = result;

    operator = null;

}

function allClear(){

    current = "";
    firstNumber = null;
    operator = null;
    waitingSecondNumber = false;

    display.value = "";

}

function backspace(){

    current = current.slice(0,-1);

    display.value = current;

}

function changeSign(){

    if(current === "") return;

    current = String(Number(current) * -1);

    display.value = current;

}

/* ---------- حافظه ---------- */

function memoryClear(){

    memory = 0;

    localStorage.setItem("memory",memory);

}

function memoryRecall(){

    current = String(memory);

    display.value = current;

}

function memoryAdd(){

    memory += Number(current || 0);

    localStorage.setItem("memory",memory);

}

function memorySubtract(){

    memory -= Number(current || 0);

    localStorage.setItem("memory",memory);

}

/* ---------- تاریخچه ---------- */

function addHistory(text){

    history.unshift(text);

    if(history.length > 10){

        history.pop();

    }

    localStorage.setItem("history",JSON.stringify(history));

    showHistory();

}

function showHistory(){

    let list = document.getElementById("historyList");

    if(!list) return;

    list.innerHTML = "";

    history.forEach(function(item){

        list.innerHTML += "<li>"+item+"</li>";

    });

}

/* ---------- صفحه کلید ---------- */

document.addEventListener("keydown",function(e){

    if(e.key >= "0" && e.key <= "9"){

        appendNumber(e.key);

    }

    else if(e.key === "."){

        appendDot();

    }

    else if(
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/"
    ){

        appendOperator(e.key);

    }

    else if(e.key === "Enter"){

        e.preventDefault();

        calculate();

    }

    else if(e.key === "Backspace"){

        backspace();

    }

    else if(e.key === "Delete"){

        allClear();

    }

});
