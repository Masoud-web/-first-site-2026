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

function jam() {

    let n = getNumbers();
    if (n == null) return;

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a + n.b);
}

function tafrigh() {

    let n = getNumbers();
    if (n == null) return;

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a - n.b);
}

function zarb() {

    let n = getNumbers();
    if (n == null) return;

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a * n.b);
}

function taghsim() {

    let n = getNumbers();
    if (n == null) return;

    if (n.b === 0) {
        alert("تقسیم بر صفر امکان‌پذیر نیست.");
        return;
    }

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a / n.b);
}

function tavan() {

    let n = getNumbers();
    if (n == null) return;

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a ** 2);
}

function jazr() {

    let n = getNumbers();
    if (n == null) return;

    if (n.a < 0) {
        alert("جذر عدد منفی تعریف نشده است.");
        return;
    }

    document.getElementById("result").innerHTML =
        "نتیجه = " + Math.sqrt(n.a);
}

function baghimande() {

    let n = getNumbers();
    if (n == null) return;

    if (n.b === 0) {
        alert("تقسیم بر صفر امکان‌پذیر نیست.");
        return;
    }

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a % n.b);
}

function clearData() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "نتیجه:";

    document.getElementById("num1").focus();
}

let dark = false;

function darkMode() {

    if (dark == false) {

        document.body.style.background = "#222";
        document.body.style.color = "white";

        dark = true;

    } else {

        document.body.style.background = "#f2f2f2";
        document.body.style.color = "black";

        dark = false;
    }
}

function showClock() {

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;
}

setInterval(showClock, 1000);

showClock();
