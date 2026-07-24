function hello() {
    let name = prompt("نام شما چیست؟");

    if (name != null && name != "") {
        document.getElementById("message").innerHTML =
            "سلام " + name + " 🌹";
    }
}

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
