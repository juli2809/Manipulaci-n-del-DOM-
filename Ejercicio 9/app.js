// Seleccionar imagen
const imagen = document.getElementById("banner");

// URLs de las imágenes
const imagenOriginal = "Captura.PNG";
const imagenNueva = "23.PNG";

// Evento para cambiar la imagen al pasar el mouse
imagen.addEventListener("mouseover", function() {
    imagen.src = imagenNueva;
});

// Evento para volver a la imagen original al quitar el mouse
imagen.addEventListener("mouseout", function() {
    imagen.src = imagenOriginal;
});
