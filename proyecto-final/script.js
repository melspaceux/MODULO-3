var area = document.getElementById('areaComentario');
var boton = document.getElementById('btnPublicar');
var contenedor = document.getElementById('listaComentarios');

var misComentarios = JSON.parse(localStorage.getItem('muro_comentarios')) || [];

function dibujarComentarios() {
    contenedor.innerHTML = '';

    misComentarios.forEach(function (item, index) {
        var div = document.createElement('div');
        div.className = 'comentario';

        div.innerHTML = '<p>' + item.texto + '</p>' +
            '<span class="fecha">' + item.fecha + '</span>' +
            '<button class="btn-borrar" onclick="borrarComentario(' + index + ')">Eliminar</button>';

        contenedor.appendChild(div);
    });
}

function guardar() {
    localStorage.setItem('muro_comentarios', JSON.stringify(misComentarios));
    dibujarComentarios();
}

boton.onclick = function () {
    var texto = area.value.trim();

    if (texto === "") {
        alert("Escribe algo primero");
        return;
    }

    var nuevo = {
        texto: texto,
        fecha: new Date().toLocaleString()
    };

    misComentarios.push(nuevo);
    area.value = '';
    guardar();
};

function borrarComentario(id) {
    misComentarios.splice(id, 1);
    guardar();
}

dibujarComentarios();
