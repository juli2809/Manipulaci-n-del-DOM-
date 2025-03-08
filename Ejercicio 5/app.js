// Selecciona el botón
const botonModo = document.getElementById("modo");

// Si el usuario ya tiene una preferencia guardada
if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("oscuro");
    botonModo.textContent = "Cambiar a modo claro";
}

// Evento para cambiar de tema
botonModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    // Verificar el modo actual y actualizar el texto del botón
    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "Cambiar a modo claro";
        localStorage.setItem("modoOscuro", "true"); // Guardar preferencia en localStorage
    } else {
        botonModo.textContent = "Cambiar a modo oscuro";
        localStorage.setItem("modoOscuro", "false");
    }
});
