// Botón y el div donde se mostrará el contenido
const boton = document.getElementById("cargarBtn");
const contenido = document.getElementById("contenido");

// Evento para cargar datos simulando una demora con setTimeout
boton.addEventListener("click", function() {
    contenido.innerHTML = "Cargando..."; // Mostrar mensaje de carga

    // Simular una carga de datos después de 2 segundos
    setTimeout(() => {
        contenido.innerHTML = "✅ Datos cargados exitosamente: <br> - Nombre: Mario Mendoza <br> - Edad: 30 años <br> - Ciudad: Bogotá";
    }, 2000);
});
