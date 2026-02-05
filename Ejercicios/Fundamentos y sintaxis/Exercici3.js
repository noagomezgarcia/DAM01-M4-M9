function indicarMayor(a, b) {
    if (a > b) {
        console.log(a + " es mayor que " + b);
    } else if (b > a) {
        console.log(b + " es mayor que " + a);
    } else {
        console.log("Ambos números son iguales.");
    }
}

function multiplicar(a, b) {
    let resultado = 0;
    //Sumamos a, b veces
    for (let i = 0; i < Math.abs(b); i++) {
        resultado += a;
    }
    //Si b era negativo, invertimos el signo
    return b < 0 ? -resultado : resultado;
}

function multiplicarTres(a, b, c) {
    let primerPaso = multiplicar(a, b);
    return multiplicar(primerPaso, c);
}

function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media.toFixed(1);
}

function encontrarNumerosEspeciales() {
    for (let i = 0; i <= 10000; i++) {
        let cifras = i.toString().split('');
        let sumaCubos = 0;

        for (let cifra of cifras) {
            let n = parseInt(cifra);
            sumaCubos += (n * n * n);
        }

        if (sumaCubos === i) {
            console.log(i + " cumple la propiedad.");
        }
    }
}
encontrarNumerosEspeciales();

function calcularCuboSeguro(num) {
    if (typeof num !== 'number') {
        alert("Error: El valor introducido no es un número.");
        return false;
    }
    if (!Number.isInteger(num)) {
        alert("Error: El número debe ser un entero.");
        return false;
    }

    return Math.pow(num, 3);
}