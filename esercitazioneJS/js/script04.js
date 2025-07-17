let nome = prompt("Come ti chiami?");

h1.innerHTML = `Ciao ${nome.charAt(0).toUpperCase() + nome.slice(1)}, benvenuto!`;