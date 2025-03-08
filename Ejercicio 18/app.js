// Lista de imágenes 
const imagenes = ["2.PNG", "23.PNG"];

// Elementos del DOM
const imagen = document.getElementById("imagen");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Índice de la imagen actual
let indice = 0;

// Función para actualizar la imagen
function actualizarImagen() {
    imagen.src = imagenes[indice];
}

// Evento para el botón "Siguiente"
nextBtn.addEventListener("click", function() {
    indice = (indice + 1) % imagenes.length; // Avanza y vuelve al inicio si es necesario
    actualizarImagen();
});

// Evento para el botón "Anterior"
prevBtn.addEventListener("click", function() {
    indice = (indice - 1 + imagenes.length) % imagenes.length; // Retrocede y vuelve al final si es necesario
    actualizarImagen();
});
