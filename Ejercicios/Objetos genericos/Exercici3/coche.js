let coche = {
    marca : "Toyota",
    modelo : "Corolla",
    anyo : 2020,
    encendido : false,
    arrancar : function() {
        this.encendido = true;
        console.log("El valor actual del encendido es: " + this.encendido);
    },
    apagar : function() {
        this.encendido = false;
        console.log("El valor actual del encendido es: " + this.encendido);
    },
    kilometraje : 0,
    recorrer : function(km) {
        this.kilometraje += km;
        console.log("El kilometraje actual es de " + this.kilometraje + "KM.");
    }
};

coche.arrancar();
coche.recorrer(50);
coche.apagar();