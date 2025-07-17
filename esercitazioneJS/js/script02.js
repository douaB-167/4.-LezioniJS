let strumenti_tecnilogici = ["computer", "mouse", "tablet", "cuffie", "tastiera", "casse"];
let demo = document.getElementById("demo");

strumenti_tecnilogici.forEach(element => {
   console.log(element);
   demo.innerHTML += `<span style="color: blue">${element.charAt(0).toUpperCase() + element.slice(1)}, </span> `;
});