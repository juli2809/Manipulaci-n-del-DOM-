// Seleccionamos el botón y la notificación
const boton = document.getElementById("mostrarNotificacion");
const notificacion = document.getElementById("notificacion");

// Evento para mostrar la notificación
boton.addEventListener("click", function() {
    notificacion.classList.add("mostrar"); // Mostrar la notificación

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove("mostrar");
    }, 3000);
});
