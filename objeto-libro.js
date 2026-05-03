
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",

    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],

    describirLibro: function () {
        console.log(`\n--- Información del Libro ---`);
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}.`);
        console.log(`El estado actual es: ${this.estado}.`);
    },

    agregarCapitulo: function (nuevoCapitulo) {
        this.capitulos.push(nuevoCapitulo);
        console.log(`Capítulo "${nuevoCapitulo}" agregado correctamente.`);
    },

    eliminarCapitulo: function (nombreCapitulo) {
        const indice = this.capitulos.indexOf(nombreCapitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${nombreCapitulo}" eliminado.`);
        } else {
            console.log(`Error: El capítulo "${nombreCapitulo}" no se encontró.`);
        }
    },

    mostrarCapitulos: function () {
        console.log(`Capítulos actuales: ${this.capitulos.join(", ")}`);
    }
};

libro.describirLibro();

libro.estado = "prestado";
console.log("\n(Cambiando estado a prestado...)");
libro.describirLibro();

console.log("\n--- Gestión de Capítulos ---");
libro.mostrarCapitulos();
libro.agregarCapitulo("Capítulo 4");
libro.mostrarCapitulos();
libro.eliminarCapitulo("Capítulo 2");
libro.mostrarCapitulos();
