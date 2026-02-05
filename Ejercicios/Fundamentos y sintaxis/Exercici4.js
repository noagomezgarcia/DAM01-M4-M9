function obtenStringEmpiezaConAs(texto) {
    if (texto === '') return ''; // Caso cadena vacía

    if (texto.startsWith('As') || texto.startsWith('AS')) {
        return texto;
    } else {
        return 'As' + texto.toLowerCase();
    }
}

console.log(obtenStringEmpiezaConAs('Terisco'));
console.log(obtenStringEmpiezaConAs('ASTerisco'));

function eliminaCaracterPosicion(texto, posicion) {
    //Comprobamos que la posición sea válida (menor que la longitud)
    if (posicion >= 0 && posicion < texto.length) {
        let parte1 = texto.slice(0, posicion);
        let parte2 = texto.slice(posicion + 1);
        return parte1 + parte2;
    } else {
        //Si la posición no es válida, devolvemos el string original
        return texto;
    }
}

console.log(eliminaCaracterPosicion('murcielago', 3));
console.log(eliminaCaracterPosicion('rinoceronte', 12));

function intercambiarExtremos(texto) {
    if (texto.length <= 1) {
        return texto; //Si tiene 0 o 1 carácter, no hay nada que intercambiar
    }

    let primero = texto.charAt(0);
    let ultimo = texto.charAt(texto.length - 1);
    let medio = texto.slice(1, texto.length - 1);

    return ultimo + medio + primero;
}

console.log(intercambiarExtremos('hola')); // aolh