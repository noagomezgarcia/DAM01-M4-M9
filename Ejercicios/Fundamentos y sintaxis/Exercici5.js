function separarVocalesDeConsonantes(texto) {
    let vocalesEncontradas = "";
    let consonantesEncontradas = "";
    const conjuntoVocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        // Comprobamos si es una letra (ignorando espacios para este ejercicio)
        if (/[a-zA-ZáéíóúÁÉÍÓÚ]/.test(caracter)) {
            if (conjuntoVocales.includes(caracter)) {
                vocalesEncontradas += caracter;
            } else {
                consonantesEncontradas += caracter;
            }
        } else {
            //Si es un espacio o símbolo lo omitiremos.
        }
    }

    return vocalesEncontradas + consonantesEncontradas;
}

console.log("Test 'javascript':", separarVocalesDeConsonantes('javascript'));
//Esperado: aaijvscrpt

console.log("Test 'Eduardo':", separarVocalesDeConsonantes('Eduardo'));
//Esperado: Euaodrd

console.log("Test 'Manzana':", separarVocalesDeConsonantes('Manzana'));
//Esperado: aaaMnzn