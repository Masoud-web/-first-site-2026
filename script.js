function jam(){

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =
    "نتیجه = " + (a+b);

}

function tafrigh(){

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =
    "نتیجه = " + (a-b);

}

function zarb(){

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =
    "نتیجه = " + (a*b);

}

function taghsim(){

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if(b==0){
        alert("تقسیم بر صفر امکان‌پذیر نیست.");
        return;
    }

    document.getElementById("result").innerHTML =
    "نتیجه = " + (a/b);

}
