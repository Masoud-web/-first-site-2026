function hello() {
    let name = prompt("نام شما چیست؟");

    document.getElementById("message").innerHTML =
        "سلام " + name + " 🌹";
}

function darkMode() {
    document.body.style.background = "black";
    document.body.style.color = "white";
}
