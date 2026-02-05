let salutacion = saludar("Noa");
console.log(salutacion);

salutacion = saludar("Noa", "Adiós");
console.log(salutacion);

let calculo = calcular(4, 4);
console.log(calculo);

calculo = calcular(16, 4, "Division");
console.log(calculo);

function saludar(nombre, saludo = "Hola") {
    return saludo + " " + nombre;
}

function calcular(num1, num2, operacion = "Suma") {
    let resultado = 0;

    switch (operacion) {
        case "Suma": resultado = num1 + num2;
        case "Resta": resultado = num1 - num2;
        case "Multiplicacion": resultado = num1 * num2;
        case "Division": resultado = num1 / num2;
    }

    return resultado;
}
