let dark = false;

function hello() {

    let name = document.getElementById("name").value;

    if (name == "") {
        alert("لطفاً نام خود را وارد کنید.");
        return;
    }

    document.getElementById("message").innerHTML =
        "سلام " + name + " 🌹";
}

function darkMode() {

    if (dark == false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark = false;
    }

}
