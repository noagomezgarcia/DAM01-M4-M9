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

const añoActual = 2026;

//Filtrar
let filtrados = coches.filter(c => {
    const marca = c[0];
    const año = c[2];
    return marca !== 'Alfa Romeo' && marca !== 'Kia' && (añoActual - año) > 20;
});

//Ordenar por precio descendentemente
let ordenados = [...filtrados].sort((a, b) => b[3] - a[3]);

//Aplicar rebaja del 20% al precio
let conRebaja = ordenados.map(c => {
    //Creamos una copia del array para no modificar el original
    let copiaCoche = [...c];
    copiaCoche[3] = copiaCoche[3] * 0.8; //Precio * 0.80
    return copiaCoche;
});

console.log("Resultado final (Filtrados, Ordenados y con Rebaja):");
console.table(conRebaja);