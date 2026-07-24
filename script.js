function hello() {
    let name = prompt("نام شما؟");

    document.getElementById("message").innerHTML =
        "<h2>سلام " + name + " 👋</h2>";
}
