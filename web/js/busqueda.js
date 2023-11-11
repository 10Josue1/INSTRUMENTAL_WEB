// busqueda.js

// Función para buscar por ID
function buscarPorId() {
    var idABuscar = document.getElementById("searchId").value;

    // Realiza una solicitud al servidor para buscar por ID (puedes usar Ajax).
    // A continuación, se muestra una simulación de cómo podrías hacerlo.
    // Debes adaptar esta parte para interactuar con tu base de datos real.
    
    // Simulación de una solicitud Ajax (puedes reemplazarla con la lógica real)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "buscarProductoPorId?id=" + idABuscar, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var respuesta = JSON.parse(xhr.responseText);
            mostrarResultado(respuesta);
        } else {
            console.error("Error al realizar la búsqueda.");
        }
    };
    xhr.send();
}

// Función para mostrar los resultados en la página
function mostrarResultado(resultado) {
    var resultadosDiv = document.getElementById("resultados");

    if (resultado.encontrado) {
        resultadosDiv.innerHTML = "ID: " + resultado.id + "<br>";
        resultadosDiv.innerHTML += "Nombre: " + resultado.nombre + "<br>";
        resultadosDiv.innerHTML += "Cantidad: " + resultado.cantidad + "<br>";
        resultadosDiv.innerHTML += "Precio: " + resultado.precio + "<br>";
    } else {
        resultadosDiv.innerHTML = "Producto no encontrado.";
    }
}
