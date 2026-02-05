//Función saludar
const saludar = (nombre, saludo = "Hola") => `${saludo}, ${nombre}`;

//Función calcular
const calcular = (num1, num2, operacion = "suma") => {
    const ops = {
        suma: num1 + num2,
        resta: num1 - num2,
        multiplicacion: num1 * num2,
        division: num1 / num2
    };
    return ops[operacion.toLowerCase()] || "Operación no válida";
};

//Promedio: suma divide por el total de argumentos
const calcularPromedio = (...notas) =>
    notas.length === 0 ? 0 : notas.reduce((a, b) => a + b, 0) / notas.length;

//Concatenar nombres: une el array con comas
const concatenarNombres = (...nombres) => nombres.join(", ");

const separarVocalesDeConsonantes = (texto) => {
    const esVocal = char => "aeiouAEIOUáéíóúÁÉÍÓÚ".includes(char);
    const letras = texto.split('').filter(char => /[a-zA-ZáéíóúÁÉÍÓÚ]/.test(char));

    const vocales = letras.filter(char => esVocal(char)).join('');
    const consonantes = letras.filter(char => !esVocal(char)).join('');

    return vocales + consonantes;
};

//Indicar el mayor
const indicarMayor = (a, b) => a > b ? `${a} es mayor` : (b > a ? `${b} es mayor` : "Iguales");

//Calcular cubo con validación
const calcularCuboSeguro = (num) =>
    (!Number.isInteger(num))
        ? (alert("Error: No es un entero"), false)
        : Math.pow(num, 3);