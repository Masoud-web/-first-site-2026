let dark = false;

let historyList = [];

function getNumbers() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("لطفاً هر دو عدد را وارد کنید.");
        return null;
    }

    return {
        a: Number(num1),
        b: Number(num2)
    };
}

function addHistory(text){

    historyList.push(text);

    let list=document.getElementById("history");

    list.innerHTML="";

    for(let i=0;i<historyList.length;i++){

        list.innerHTML += "<li>"+historyList[i]+"</li>";

    }

}

function jam(){

    let n=getNumbers();
    if(n==null) return;

    let result=n.a+n.b;

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory(n.a+" + "+n.b+" = "+result);

}

function tafrigh(){

    let n=getNumbers();
    if(n==null) return;

    let result=n.a-n.b;

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory(n.a+" - "+n.b+" = "+result);

}

function zarb(){

    let n=getNumbers();
    if(n==null) return;

    let result=n.a*n.b;

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory(n.a+" × "+n.b+" = "+result);

}

function taghsim(){

    let n=getNumbers();
    if(n==null) return;

    if(n.b===0){

        alert("تقسیم بر صفر امکان‌پذیر نیست.");

        return;

    }

    let result=n.a/n.b;

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory(n.a+" ÷ "+n.b+" = "+result);

}

function tavan(){

    let n=getNumbers();
    if(n==null) return;

    let result=n.a**2;

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory(n.a+"² = "+result);

}

function jazr(){

    let n=getNumbers();
    if(n==null) return;

    if(n.a<0){

        alert("جذر عدد منفی تعریف نشده است.");

        return;

    }

    let result=Math.sqrt(n.a);

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory("√"+n.a+" = "+result);

}

function baghimande(){

    let n=getNumbers();
    if(n==null) return;

    if(n.b===0){

        alert("تقسیم بر صفر امکان‌پذیر نیست.");

        return;

    }

    let result=n.a%n.b;

    document.getElementById("result").innerHTML="نتیجه = "+result;

    addHistory(n.a+" % "+n.b+" = "+result);

}

function clearData(){

    document.getElementById("num1").value="";
    document.getElementById("num2").value="";

    document.getElementById("result").innerHTML="نتیجه:";

    document.getElementById("num1").focus();

}

function darkMode(){

    if(!dark){

        document.body.style.background="#222";
        document.body.style.color="white";

        dark=true;

    }else{

        document.body.style.background="#f2f2f2";
        document.body.style.color="black";

        dark=false;

    }

}

function showClock(){

    let now=new Date();

    document.getElementById("clock").innerHTML=
        now.toLocaleTimeString();

}

setInterval(showClock,1000);

showClock();
