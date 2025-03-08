// El formulario y la tabla
const formulario = document.getElementById("formulario");
const tabla = document.querySelector("#tabla tbody");

// Evento para agregar una fila al enviar el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener valores ingresados por el usuario
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("ciudad").value;

    // Crear una nueva fila
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${ciudad}</td>
        <td><button class="eliminar">Eliminar</button></td>
    `;

    // Agregar fila a la tabla
    tabla.appendChild(fila);

    // Limpiar los campos del formulario
    formulario.reset();

    // Agregar evento para eliminar la fila
    fila.querySelector(".eliminar").addEventListener("click", function() {
        fila.remove();
    });
});
