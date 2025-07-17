let demo = document.getElementById("demo");
let array = ["gatto", "cane", "coniglio", "pesce", "uccello"];
let joinArray;
let newArray = [];
array.forEach(element => {
    element = element.toUpperCase().charAt(0) + element.slice(1);
    console.log(element);
    newArray.push(element);
})
joinArray = newArray.join(", ");
demo.innerHTML += joinArray;