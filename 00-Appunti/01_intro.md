- console.log(text); print on the console of the web page 
- let for variables
- "+" to concatenate the strings es: "hello: " + name;
- `hello ${name}`;
- for(let i = 0; i < array.length; i ++){
    console.log(array[i]);
  }
- array.forEach(item => {
    console.log(item);
  })
- for(const item of array){
    console.log(item);
  }
- let array = [];
- array methods: 
    - array.push(element); for adding a new element
    - array.sort().reverse; 
    - array.pop() delete the last element
    - array.shift() delete the first element
    - array.splice(index, numberOfItems) changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
    - array.slice(start, end) eturns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified
    - array.indexOf(element) prima occorrenza
    - array.lastIndexOf(element) l'ultima occorrenza
    - filter method: 
        let filtro = array.filter(item => item.length > 6); //Questo restituisce un array
        console.log(filtro);
    - find method: 
        let find = array.find(item => item.length > 6); //Questo restituisce un singolo elemento
        console.log(find);
    - method to join element:
        console.log(array.join(simbol));
    - reverse element:
        let nome = "Doua";
        let emon = nome.split("").reverse().join();