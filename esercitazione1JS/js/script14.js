let demo = document.getElementById("demo");
let array = [];

for(let i = 1; i < 100; i++){
    array[i] = i;
    demo.innerHTML += array[i] + "<br>";
    if (i % 15 === 0){
        demo.innerHTML += i + " Ciao, Mondo<br>";
    } else if (i % 3 === 0) {
        demo.innerHTML += i + " Ciao<br>";
    } else if (i % 5 === 0) {
        demo.innerHTML += i + " Mondo<br>";
    }
}