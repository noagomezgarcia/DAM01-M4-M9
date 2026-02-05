function saludar(nombre, saludo = "Hola") {
    return `${saludo}, ${nombre}`;
}

console.log(saludar("María"));
console.log(saludar("Carlos", "Buenos días"));

function calcular(num1, num2, operacion = "suma") {
    switch (operacion.toLowerCase()) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num1 / num2;
        default:
            return "Operación no válida";
    }
}

console.log(calcular(10, 5));
console.log(calcular(10, 5, "resta"));
console.log(calcular(10, 5, "multiplicacion"));

function calcularPromedio(...calificaciones) {
    if (calificaciones.length === 0) return 0;

    let suma = calificaciones.reduce((acumulado, valorActual) => acumulado + valorActual, 0);
    return suma / calificaciones.length;
}

console.log(calcularPromedio(8, 9, 10));
console.log(calcularPromedio(5, 7));

function concatenarNombres(...nombres) {
    if (nombres.length === 0) return "";

    return nombres.join(", ");
}

console.log(concatenarNombres("Ana", "Luis", "Pedro"));
console.log(concatenarNombres("Marta"));