
let nota = 85;


console.log("La nota del estudiante es:", nota);


if (nota > 0) {


    if (nota >= 90) {
        console.log("Resultado: Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Resultado: Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Resultado: Suficiente");
    } else {

        console.log("Resultado: El estudiante no aprueba");
    }

} else if (nota === 0) {

    console.log("Resultado: El estudiante no aprueba (Nota 0)");
} else {

    console.log("Error: Por favor ingresa una nota válida entre 0 y 100.");
}

