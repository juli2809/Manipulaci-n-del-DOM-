const buscador = document.getElementById("buscador");
const listaProductos = document.querySelectorAll("#listaProductos li");

// Evento para filtrar productos en tiempo real
buscador.addEventListener("keyup", function() {
    let filtro = buscador.value.toLowerCase(); // Convertir a minúsculas

    listaProductos.forEach((producto) => {
        let texto = producto.textContent.toLowerCase(); // Texto del producto en minúsculas
        if (texto.includes(filtro)) {
            producto.classList.remove("hidden"); // Muestra si coincide
        } else {
            producto.classList.add("hidden"); // Oculta si no coincide
        }
    });
});
