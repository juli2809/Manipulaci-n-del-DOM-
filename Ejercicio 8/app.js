// Selecciona elemento donde se mostrará el contador
const contadorElemento = document.getElementById("contador");

let tiempo = 10; // Tiempo inicial en segundos

// Función que ejecuta la cuenta regresiva
const temporizador = setInterval(() => {
    contadorElemento.textContent = tiempo; // Actualiza el número en pantalla

    if (tiempo === 0) {
        clearInterval(temporizador); // Detiene el temporizador
        contadorElemento.textContent = "¡Tiempo terminado!";
    } else {
        tiempo--; // Reduce el tiempo en 1 segundo
    }
}, 1000); // Se ejecuta cada 1 segundo
