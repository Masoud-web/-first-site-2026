function appendValue(value){

    document.getElementById("display").value += value;

}

function clearDisplay(){

    document.getElementById("display").value = "";

}

function calculate(){

    let display = document.getElementById("display");

    try{

        display.value = eval(display.value);

    }catch{

        alert("عبارت وارد شده صحیح نیست.");

        display.value = "";

    }

}

// حذف آخرین کاراکتر
function backspace(){

    let display = document.getElementById("display");

    display.value = display.value.slice(0,-1);

}

// پشتیبانی از صفحه کلید
document.addEventListener("keydown",function(event){

    let key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key=="+" ||
        key=="-" ||
        key=="*" ||
        key=="/" ||
        key=="." ||
        key=="(" ||
        key==")"
    ){

        appendValue(key);

    }

    else if(key=="Enter"){

        event.preventDefault();

        calculate();

    }

    else if(key=="Backspace"){

        backspace();

    }

    else if(key=="Delete"){

        clearDisplay();

    }

});
