let dark = false;
let historyList = [];

// بارگذاری تاریخچه ذخیره شده
window.onload = function () {

    showClock();

    let saved = localStorage.getItem("history");

    if (saved != null) {

        historyList = JSON.parse(saved);

        showHistory();

    }

};

// دریافت اعداد
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

// نمایش تاریخچه
function showHistory() {

    let list = document.getElementById("history");

    list.innerHTML = "";

    for (let i = 0; i < historyList.length; i++) {

        list.innerHTML += "<li>" + historyList[i] + "</li>";

    }

}

// افزودن به تاریخچه
function addHistory(text) {

    historyList.push(text);

    localStorage.setItem("history", JSON.stringify(historyList));

    showHistory();

}

// جمع
function jam() {

    let n = getNumbers();

    if (n == null) return;

    let result = n.a + n.b;

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory(n.a + " + " + n.b + " = " + result);

}

// تفریق
function tafrigh() {

    let n = getNumbers();

    if (n == null) return;

    let result = n.a - n.b;

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory(n.a + " - " + n.b + " = " + result);

}

// ضرب
function zarb() {

    let n = getNumbers();

    if (n == null) return;

    let result = n.a * n.b;

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory(n.a + " × " + n.b + " = " + result);

}

// تقسیم
function taghsim() {

    let n = getNumbers();

    if (n == null) return;

    if (n.b == 0) {

        alert("تقسیم بر صفر امکان‌پذیر نیست.");

        return;

    }

    let result = n.a / n.b;

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory(n.a + " ÷ " + n.b + " = " + result);

}

// توان
function tavan() {

    let n = getNumbers();

    if (n == null) return;

    let result = n.a ** 2;

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory(n.a + "² = " + result);

}

// جذر
function jazr() {

    let n = getNumbers();

    if (n == null) return;

    if (n.a < 0) {

        alert("جذر عدد منفی تعریف نشده است.");

        return;

    }

    let result = Math.sqrt(n.a);

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory("√" + n.a + " = " + result);

}

// باقیمانده
function baghimande() {

    let n = getNumbers();

    if (n == null) return;

    if (n.b == 0) {

        alert("تقسیم بر صفر امکان‌پذیر نیست.");

        return;

    }

    let result = n.a % n.b;

    document.getElementById("result").innerHTML =
        "نتیجه = " + result;

    addHistory(n.a + " % " + n.b + " = " + result);

}

// پاک کردن ورودی‌ها
function clearData() {

    document.getElementById("num1").value = "";

    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "نتیجه:";

    document.getElementById("num1").focus();

}

// پاک کردن تاریخچه
function clearHistory() {

    historyList = [];

    localStorage.removeItem("history");

    showHistory();

}

// حالت شب
function darkMode() {

    if (!dark) {

        document.body.style.background = "#222";

        document.body.style.color = "white";

        document.querySelector(".card").style.background = "#333";

        dark = true;

    } else {

        document.body.style.background = "#f2f2f2";

        document.body.style.color = "black";

        document.querySelector(".card").style.background = "white";

        dark = false;

    }

}

// ساعت
function showClock() {

    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

}

setInterval(showClock, 1000);
