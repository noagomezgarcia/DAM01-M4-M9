const sumarPares = (lista) => {
    let suma = 0;
    for (let num of lista) {
        if (num % 2 === 0) {
            suma += num;
        }
    }
    return suma;
};

console.log(sumarPares([2, 4, 5, 6, 7, 8, 3, 1, 10, 4]));

const ordenDatos = (datos) => {
    //Extraemos el nombre (último) y el apellido (primero)
    const nombre = datos[datos.length - 1];
    const apellido = datos[0];

    //Extraemos las notas (lo que está en medio)
    const notasRaw = datos.slice(1, datos.length - 1);

    //Convertimos las notas a números y calculamos la media
    const notas = notasRaw.map(n => parseFloat(n));
    const suma = notas.reduce((acc, n) => acc + n, 0);
    const media = suma / notas.length;

    //Construimos el nuevo array
    return [nombre, apellido, ...notas, media];
};

console.log(ordenDatos(["Rodriguez", "8", 9, '5', 4, 'Clara']));

const filterWords = (words) => {
    return words.filter(word => !word.toUpperCase().startsWith('Z'));
};

console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["León", "Zebra", "Gacela"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi"]));