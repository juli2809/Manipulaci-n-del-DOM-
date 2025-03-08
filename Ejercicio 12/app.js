// Selección del <select>
const selectorColor = document.getElementById("selectorColor");

// Evento para cambiar el color de fondo
selectorColor.addEventListener("change", function() {
    document.body.style.backgroundColor = selectorColor.value;
});
