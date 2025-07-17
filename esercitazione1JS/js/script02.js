let lato1 = 5;
let lato2 = 6;
let lato3 = 7;
let btn = document.getElementById("btn");
let h1 = document.querySelector("h1");

function perimetro(lato1, lato2, lato3) {
    return lato1 + lato2 + lato3;
}

function area(lato1, lato2, lato3) {
    let s = (lato1 + lato2 + lato3) / 2;
    return Math.sqrt(s * (s - lato1) * (s - lato2) * (s - lato3));
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    let p = perimetro(lato1, lato2, lato3);
    let a = Math.round(area(lato1, lato2, lato3));
    h1.textContent = `Perimetro: ${p}, Area: ${a}`;
});