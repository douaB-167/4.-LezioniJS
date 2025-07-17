let nome = document.getElementById("name");
let btn = document.getElementById("btn");
let h1 = document.querySelector("h1");
function saluta() {
    h1.textContent = "Ciao " + nome.value + "!";
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    saluta();
});