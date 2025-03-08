// Elementos del DOM
const inputKilometros = document.getElementById("kilometros");
const resultadoMillas = document.getElementById("millas");

// Evento para detectar cambios en el input
inputKilometros.addEventListener("input", function () {
    let km = parseFloat(inputKilometros.value); // Obtiene el valor ingresado
    if (!isNaN(km)) {
        let millas = km * 0.621371; // Conversión a millas
        resultadoMillas.textContent = millas.toFixed(2); // Muestra el resultado con 2 decimales
    } else {
        resultadoMillas.textContent = "0"; // Si el input está vacío, muestra 0
    }
});
