function hello() {
    let name = prompt("نام شما چیست؟");

    document.getElementById("message").innerHTML =
        "سلام " + name + "، خوش آمدید 🌹";
}