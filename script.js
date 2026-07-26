let display = document.getElementById("display");
let expression = document.getElementById("expression");

let current = "";
let firstNumber = null;
let operator = null;
let waitingSecondNumber = false;

// حافظه
let memory = Number(localStorage.getItem("memory")) || 0;

// تاریخچه
let history = JSON.parse(localStorage.getItem("history")) || [];

showHistory();

// ======================
// نمایش اعداد
// ======================

function appendNumber(number){

    if(waitingSecondNumber){

        current = number;
        waitingSecondNumber = false;

    }else{

        current += number;

    }

    updateDisplay();

}

// ======================
// اعشار
// ======================

function appendDot(){

    if(current.indexOf(".") === -1){

        if(current === ""){

            current = "0.";

        }else{

            current += ".";

        }

        updateDisplay();

    }

}

// ======================
// نمایش
// ======================

function updateDisplay(){

    display.value = current;

    // کوچک شدن خودکار فونت
    if(current.length > 12){

        display.style.fontSize = "24px";

    }
    else if(current.length > 8){

        display.style.fontSize = "30px";

    }
    else{

        display.style.fontSize = "40px";

    }

}

// ======================
// عملگر
// ======================

function appendOperator(op){

    if(current === "") return;

    firstNumber = Number(current);

    operator = op;

    expression.innerHTML = current + " " + op;

    waitingSecondNumber = true;

}

// ======================
// محاسبه
// ======================

function calculate(){

    if(operator == null) return;

    let second = Number(current);

    let result = 0;

    switch(operator){

        case "+":
            result = firstNumber + second;
            break;

        case "-":
            result = firstNumber - second;
            break;

        case "*":
            result = firstNumber * second;
            break;

        case "/":

            if(second == 0){

                alert("تقسیم بر صفر امکان پذیر نیست.");

                return;

            }

            result = firstNumber / second;
            break;

    }

    expression.innerHTML =
        firstNumber + " " +
        operator + " " +
        second + " =";

    current = String(result);

    updateDisplay();

    addHistory(expression.innerHTML + " " + result);

    operator = null;

    firstNumber = result;

}

// ======================
// پاک کردن
// ======================

function allClear(){

    current = "";

    firstNumber = null;

    operator = null;

    waitingSecondNumber = false;

    expression.innerHTML = "";

    updateDisplay();

}

// ======================
// حذف آخرین رقم
// ======================

function backspace(){

    current = current.slice(0,-1);

    updateDisplay();

}

// ======================
// تغییر علامت
// ======================

function changeSign(){

    if(current === "") return;

    current = String(Number(current) * -1);

    updateDisplay();

}

// ======================
// درصد
// ======================

function percent(){

    if(current === "") return;

    current = String(Number(current) / 100);

    updateDisplay();

}

// ======================
// جذر
// ======================

function squareRoot(){

    if(current === "") return;

    if(Number(current) < 0){

        alert("جذر عدد منفی تعریف نشده است.");

        return;

    }

    current = String(Math.sqrt(Number(current)));

    updateDisplay();

}

// ======================
// توان دوم
// ======================

function square(){

    if(current === "") return;

    current = String(Number(current) ** 2);

    updateDisplay();

}

// ======================
// معکوس
// ======================

function inverse(){

    if(current === "") return;

    if(Number(current) == 0){

        alert("تقسیم بر صفر امکان پذیر نیست.");

        return;

    }

    current = String(1 / Number(current));

    updateDisplay();

}

// ======================
// حافظه
// ======================

function memoryClear(){

    memory = 0;

    localStorage.setItem("memory",memory);

}

function memoryRecall(){

    current = String(memory);

    updateDisplay();

}

function memoryAdd(){

    memory += Number(current || 0);

    localStorage.setItem("memory",memory);

}

function memorySubtract(){

    memory -= Number(current || 0);

    localStorage.setItem("memory",memory);

}

// ======================
// تاریخچه
// ======================

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

// ======================
// صفحه کلید
// ======================

document.addEventListener("keydown",function(e){

    if(e.key >= "0" && e.key <= "9"){

        appendNumber(e.key);

    }

    else if(e.key == "."){

        appendDot();

    }

    else if(
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/"
    ){

        appendOperator(e.key);

    }

    else if(e.key == "Enter"){

        e.preventDefault();

        calculate();

    }

    else if(e.key == "Backspace"){

        backspace();

    }

    else if(e.key == "Delete"){

        allClear();

    }

});
