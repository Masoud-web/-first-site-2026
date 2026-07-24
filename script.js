let display = document.getElementById("display");

let current = "";
let firstNumber = null;
let operator = null;
let waitingSecondNumber = false;

// نمایش اعداد
function appendNumber(number){

    if(waitingSecondNumber){

        current = number;

        waitingSecondNumber = false;

    }else{

        current += number;

    }

    display.value = current;

}

// نقطه اعشار
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

// انتخاب عملگر
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

// محاسبه
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

                alert("تقسیم بر صفر امکان‌پذیر نیست.");

                allClear();

                return;

            }

            result = firstNumber / secondNumber;

            break;

    }

    display.value = result;

    current = String(result);

    firstNumber = result;

    operator = null;

}

// پاک کردن همه
function allClear(){

    current = "";

    firstNumber = null;

    operator = null;

    waitingSecondNumber = false;

    display.value = "";

}

// حذف آخرین رقم
function backspace(){

    current = current.slice(0,-1);

    display.value = current;

}

// تغییر علامت
function changeSign(){

    if(current === "") return;

    current = String(Number(current) * -1);

    display.value = current;

}

// صفحه کلید
document.addEventListener("keydown",function(e){

    if(e.key >= "0" && e.key <= "9"){

        appendNumber(e.key);

    }

    else if(e.key === "."){

        appendDot();

    }

    else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){

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
