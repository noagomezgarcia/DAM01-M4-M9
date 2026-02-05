/**
 * Problema 1:
 * 
 * Dada una lista de números, escribe una función en JavaScript que devuelva 
 * la suma de todos los números pares en la lista. La función deberá iterar sobre 
 * cada número en la lista, comprobar si el número es par y, si es así, añadirlo 
 * a la suma total.
 */

let arrayNumeros = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4];

let sumarPares = function(arrayNumeros) {
    return arrayNumeros.reduce((resultado, numero) => numero % 2 === 0 ? resultado + numero : resultado);
}

console.log(sumarPares(arrayNumeros));

/**
For of: 
let arrayNumeros = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4];

function sumaParesForOf(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) { 
            suma += numero;
        }
    }
    return suma;
}

console.log(sumaParesForOf(arrayNumeros));

For each: 
let arrayNumeros2 = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4];

function sumaParesForEach(numeros) {
    let suma = 0;
    numeros.forEach(numero => {
        if (numero % 2 === 0) { 
            suma += numero; 
        }
    });
    return suma;
}

console.log(sumaParesForEach(arrayNumeros2));

*/

/**
 * Problema 2:
 * 
 * Recibimos un array con los datos del alumno, pero debemos ordenarlo. 
 * En lugar de tener al final el nombre del alumno lo queremos al principio,
 * antes del apellido y queremos añadir al final la nota media. 
 */

let ordenDatos = ["Rodriguez", "8", 9, '5',4, 'Clara'];

let apellido = ordenDatos[0];
let nombre = ordenDatos[5];

let notas = [
    Number(ordenDatos[1]),
    Number(ordenDatos[2]),
    Number(ordenDatos[3]),
    Number(ordenDatos[4])
];

let notaMedia = notas.reduce((a,b) => a + b) / notas.length;

let ordenFinal = [nombre, apellido, ...notas, notaMedia];

console.log(ordenFinal.join(", "));

/**
 * Problema 3:
 * 
 * Partiendo de un array con palabras aleatorias, pero nuestro programa no acepta
 * palabras que empiezan por “Z”. Elimina estas palabras del array y devuelve el 
 * nuevo sin estas palabras.
 */

let filterWords1 = ["Bob", "Alex", "Zoello"];
let filterWords2 = ["León", "Zebra", "Gacela"];
let filterWords3 = ["Mercedes", "Bmw", "Audi", "Porche"];

let array1Filtrado1 = filterWords1.filter(palabra => palabra[0] != "Z");
let array1Filtrado2 = filterWords2.filter(palabra => palabra[0] != "Z");
let array1Filtrado3 = filterWords3.filter(palabra => palabra[0] != "Z");

console.log(
  array1Filtrado1.join(" ") + "\n" +
  array1Filtrado2.join(" ") + "\n" +
  array1Filtrado3.join(" ")
);

/**
 * Problema 4: 
 * 
 * Dado un array con los días de la semana:
 * - Obtén el primer día que empieza por "M".
 * - Obtén la posición del día que empieza por "V".
 * - Indica si algún día empieza por "S".
 * - Indica si todos los días acaban por "s".
 */

let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

let primerDiaQueEmpiezaPorM = diasSemana.find(dia => dia.startsWith("M"));
console.log ("El primer día que empieza por 'M' es: " + primerDiaQueEmpiezaPorM); 

let posicionDiaEmpiezaPorV = diasSemana.findIndex(dia => dia.startsWith("V"));
console.log ("El día que empieza por 'V' está en la posición: " + posicionDiaEmpiezaPorV);

let algunDiaEmpiezaPorV = diasSemana.some(dia => dia.startsWith("S"));
console.log ("¿Algún día empieza por 'S'? " + algunDiaEmpiezaPorV);

let todosLosDiasAcabanPorS = diasSemana.every(dia => dia.endsWith("s"));
console.log ("¿Todos los días acaban por 's'? " + todosLosDiasAcabanPorS);

/**
 * Problema 5: 
 * 
 * Dado un array con las siguientes notas [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]
 * - Calcula la nota media.
 * - Obtén la primera nota superior a 5.
 * - Las notas son sobre 10, cambialas a sobre 20.
 */

let notasArr = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];

let notaMediaArr = notasArr.reduce((a,b) => a + b) / notasArr.length;
console.log("La nota media és: " + notaMediaArr);

let primeraNotaSuperiorACinco = notasArr.find(notaArr => notaArr > 5);
console.log("La primera nota superior a 5 és: " + primeraNotaSuperiorACinco);

let notasSobreVeinte = notasArr.map(notaArr => notaArr * 2);
console.log("Las notas sobre 20 son: " + notasSobreVeinte.join(" "));

/**
 * Problema 6: 
 * 
 * Dado el siguiente array multidimensional realiza un programa :
 * - Devuelve los vehículos de la marca que no sean ni 'Alfa Romeo' ni 'Kia' que tengan más de 20 años.
 * - Ordena el array ordenado por precio descendentemente.
 * - Devuelve el array con un 20% de rebaja al precio.
 * 
 * Restricciones:
 * Se deben utilizar 3 de los siguientes métodos map(), filter(), reduce() y sort().
 */

let coches = [
    ["seat","Codoba",1997,10000],
    ["Kia","Sorento",1994,1000],
    ["seat","Todelo",2000,10000],
    ["Fiat","Bravo",2010,10200],
    ["Fiat","500",2010,10000],
    ["Mercedes","Calse B",2001,39000],  
    ["seat","Ibiza",1993,10100],
    ["Alfa Romeo","Julieta",2002,10000],
    ["Alfa Romeo","159",2002,10400],
    ["Mercedes","Calse C",2001,1000],  
    ["Alfa Romeo","147",1990,10500],
    ["Fiat","Punto",1990,999],
    ["Citroen","Saxo",1980,10300],
    ["Renault","Superc 5",1980,12000],
    ["BWM","M3",2020,1000],
    ["Kia","Picanto",1990,1000],
    ["Alfa Romeo","spider",1970,14500],
    ["Mercedes","Calse A",1994,60100],  
    ["Mercedes","Calse D",2011,21221]  
];

const añoActual = new Date().getFullYear();

let cochesConRebaja = coches
    .filter(coche => {
        const [marca, modelo, año, precio] = coche;
        return marca !== "Alfa Romeo" && marca !== "Kia" && año <= (añoActual - 20);
    })
    .sort((a, b) => b[3] - a[3])
    .map(coche => {
        const [marca, modelo, año, precio] = coche;
        return [marca, modelo, año, precio * 0.8];
    });

cochesConRebaja.forEach(coche => console.log(coche));