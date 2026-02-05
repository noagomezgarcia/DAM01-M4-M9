//1. Crea un objeto llamado tvSamsung con las propiedades especificadas:
const tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    getImporte: function() {
        return this.unidades * this.precio;
    }
};

//2. Mostrar los datos en pantalla (nombreAtributo: Valor):
console.log("nombre: " + tvSamsung.nombre);
console.log("categoria: " + tvSamsung.categoria);
console.log("unidades: " + tvSamsung.unidades);
console.log("precio: " + tvSamsung.precio);
console.log("Importe Total: " + tvSamsung.getImporte());

//3. Obtener el string JSON:
const tvSamsungString = JSON.stringify(tvSamsung);
console.log("\nJSON del objeto:");
console.log(tvSamsungString);