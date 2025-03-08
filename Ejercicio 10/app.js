const cantidadInput = document.getElementById("cantidad");
const totalElemento = document.getElementById("total");

const precioPorUnidad = 10; // Precio fijo por unidad

// Evento para calcular el total en tiempo real
cantidadInput.addEventListener("input", function() {
    let cantidad = parseInt(cantidadInput.value) || 1; // Si el valor no es válido, usa 1
    let total = cantidad * precioPorUnidad;
    totalElemento.textContent = `$${total}`;
});
