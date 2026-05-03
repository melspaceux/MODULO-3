


let librosLeidos = [];


function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro añadido: "${titulo}"`);
}



function mostrarLibrosLeidos() {
    console.log("\n--- Mi Colección de Libros Leídos ---");

    if (librosLeidos.length === 0) {
        console.log("Aún no has añadido ningún libro.");
    } else {

        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}




agregarLibro("El Principito");
agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");


mostrarLibrosLeidos();


agregarLibro("1984");


mostrarLibrosLeidos();
