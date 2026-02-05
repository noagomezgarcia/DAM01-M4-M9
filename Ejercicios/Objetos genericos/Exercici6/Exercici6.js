const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"];
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10], [10]];

const notasMap = new Map();

modulos.forEach((modulo, index) => {
    notasMap.set(modulo, alumnoNotas[index]);
});

notasMap.set("m07", [7.5, 6]);
console.log("m07 actualizado:", notasMap.get("m07"));

const setClaves = new Set(notasMap.keys());
console.log("Set de claves:", setClaves);

const alumnoObjeto = {
    nombre: "Nombre Alumno", //Añadimos una propiedad extra para darle contexto
    expediente: Object.fromEntries(notasMap)
};

console.log("Objeto Alumno:", alumnoObjeto);

