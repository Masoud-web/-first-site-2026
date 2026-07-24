function getNumbers() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (document.getElementById("num1").value == "" ||
        document.getElementById("num2").value == "") {

        alert("لطفاً هر دو عدد را وارد کنید.");
        return null;
    }

    return {a, b};
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

    if (n.b == 0) {
        alert("تقسیم بر صفر امکان‌پذیر نیست.");
        return;
    }

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a / n.b);

}

function clearData() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "نتیجه:";

}
