
const cuadrado = document.getElementById("cuadrado");

// Posición inicial
let posX = 175;
let posY = 175;
const velocidad = 10; // Cantidad de píxeles que se moverá

// Evento para detectar las teclas
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowUp": // Flecha arriba
            if (posY > 0) posY -= velocidad;
            break;
        case "ArrowDown": // Flecha abajo
            if (posY < 350) posY += velocidad;
            break;
        case "ArrowLeft": // Flecha izquierda
            if (posX > 0) posX -= velocidad;
            break;
        case "ArrowRight": // Flecha derecha
            if (posX < 350) posX += velocidad;
            break;
    }

    // Aplicar nueva posición
    cuadrado.style.top = posY + "px";
    cuadrado.style.left = posX + "px";
});
