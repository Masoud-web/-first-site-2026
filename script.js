function tavan() {

    let n = getNumbers();
    if (n == null) return;

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a * n.a);
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

    document.getElementById("result").innerHTML =
        "نتیجه = " + (n.a % n.b);
}
