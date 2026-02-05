const notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];

//Calcula la nota media
//Usamos reduce para sumar todos los elementos y dividimos por la longitud
const sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = (sumaTotal / notas.length).toFixed(2);
console.log(`La media es: ${media}`);

//Obtén la primera nota superior a 5
const primeraAprobada = notas.find(nota => nota > 5);
console.log(`Primera nota superior a 5: ${primeraAprobada}`);

//Cambiarlas a escala sobre 20
//Usamos map para crear un nuevo array multiplicando cada nota por 2
const notasSobre20 = notas.map(nota => nota * 2);
console.log("Notas sobre 20:", notasSobre20);