const btnArriba = document.getElementById("btnArriba");

// Evento de scroll para mostrar u ocultar el botón
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) { // Si el usuario baja 300px
        btnArriba.style.display = "block"; // Mostrar botón
    } else {
        btnArriba.style.display = "none"; // Ocultar botón
    }
});

// Evento para volver al inicio suavemente
btnArriba.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
