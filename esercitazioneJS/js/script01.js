let txt = "Ciao Mondo";
let number = 6;
let boolean = true;
let demo = document.getElementById("demo");

console.log(txt);
console.log(number);
console.log(boolean);

demo.innerHTML = "Testo: " + txt + "<br>" +
                "Numero: " + number + "<br>" +
                "Boolean: " + boolean + "<br>";