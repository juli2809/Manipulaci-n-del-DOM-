// Inicia variable contador en 0
let contador = 0;

// Selecciona el botón por su ID
const boton = document.getElementById("contador");

// Agregar evento para detectar clics en el botón
boton.addEventListener("click", function() {
    contador++; // Incremento del contador en 1
    boton.textContent = `Clics: ${contador}`; // Actualiza el texto del botón
});
