const eliminarDuplicados = (array) => {
    return [...new Set(array)];
};

const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const numerosUnicos = eliminarDuplicados(numeros);
console.log(numerosUnicos);

const tienenElementosEnComun = (array1, array2) => {
    const set1 = new Set(array1);
    return array2.some(elemento => set1.has(elemento));
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(tienenElementosEnComun(array1, array2));