function encontrarPrimos(inicio, fin) {
    console.log(`Buscando primos entre ${inicio} y ${fin}:`);

    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) {
            console.log(i);
        }
    }
}

function esPrimo(num) {
    if (num < 2) return false; //El 0 y 1 no son primos

    //Solo buscamos divisores hasta la raíz cuadrada del número
    let raiz = Math.sqrt(num);
    for (let j = 2; j <= raiz; j++) {
        if (num % j === 0) {
            return false; //Si es divisible por algún número, no es primo
        }
    }
    return true;
}


encontrarPrimos(1, 50);

function juegoNumeroSecreto() {
    //Generar número entre 1 y 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let acertado = false;

    alert("¡Bienvenido al juego! He pensado un número entre 1 y 100.");

    while (!acertado) {
        let entrada = prompt("Introduce tu número:");

        //Si el usuario cancela el prompt
        if (entrada === null) return;

        let numeroUsuario = parseInt(entrada);
        intentos++;

        if (isNaN(numeroUsuario)) {
            alert("Por favor, introduce un número válido.");
        } else if (numeroUsuario > numeroSecreto) {
            alert("Demasiado alto. Intenta uno más pequeño.");
        } else if (numeroUsuario < numeroSecreto) {
            alert("Demasiado bajo. Intenta uno más grande.");
        } else {
            acertado = true;
            alert(`¡Felicidades! Has acertado el número ${numeroSecreto} en ${intentos} intentos.`);
        }
    }
}