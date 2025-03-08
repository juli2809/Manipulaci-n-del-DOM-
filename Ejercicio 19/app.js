const carrito = document.getElementById("carrito");
const totalElemento = document.getElementById("total");
const vaciarCarritoBtn = document.getElementById("vaciarCarrito");

let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Crear un nuevo elemento en la lista
    const item = document.createElement("li");
    item.textContent = `${nombre} - $${precio}`;
    carrito.appendChild(item);

    // Actualizar el total
    total += precio;
    totalElemento.textContent = total;
}

// Función para vaciar el carrito
vaciarCarritoBtn.addEventListener("click", function () {
    carrito.innerHTML = ""; // Elimina todos los elementos del carrito
    total = 0;
    totalElemento.textContent = total; // Reinicia el total a 0
});
