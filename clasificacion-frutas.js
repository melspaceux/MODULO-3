
const frutas = [
    'manzana', 'pera', 'manzana', 'uva', 'manzana',
    'pera', 'platano', 'uva', 'manzana', 'platano',
    'kiwi', 'pera', 'kiwi', 'manzana'
];


const conteoFrutas = {};


console.log("--- Conteo usando Ciclo FOR ---");

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}


for (const fruta in conteoFrutas) {
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}


console.log("\n--- Conteo usando Ciclo WHILE ---");

const conteoWhile = {};
let index = 0;

while (index < frutas.length) {
    let fruta = frutas[index];

    if (conteoWhile[fruta]) {
        conteoWhile[fruta]++;
    } else {
        conteoWhile[fruta] = 1;
    }

    index++;
}


console.log(conteoWhile);
