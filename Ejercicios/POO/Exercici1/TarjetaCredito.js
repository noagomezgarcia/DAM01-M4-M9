class TarjetaCredito {
    #_numeroTarjeta;
    #_cvc;
    #_pin;
    #_fechaCaducidad;
    #_estado; 

    constructor(propietario, numero, cvc, pin, fecha) {
        this.propietario = propietario;
        this.#_numeroTarjeta = numero;
        this.#_cvc = cvc;
        this.#_pin = pin;
        this.#_fechaCaducidad = fecha;
        this.#_estado = 'inactiva';
    }

    activar() {
        this.#_estado = 'activa';
        console.log("La tarjeta ha sido activada.");
    }

    anular() {
        this.#_estado = 'anulada';
        console.log("La tarjeta ha sido anulada.");
    }

    pagar(importe, pinIngresado) {
        if (this.#_estado !== 'activa') {
            return "Operación rechazada: Tarjeta no activa.";
        }
        
        if (pinIngresado !== this.#_pin) {
            return "Operación rechazada: PIN incorrecto.";
        }

        console.log(`Pago de ${importe}€ realizado con éxito.`);
        return true;
    }

    cambiarPin(pinAntiguo, pinNuevo) {
        if (pinAntiguo === this.#_pin) {
            this.#_pin = pinNuevo;
            console.log("PIN actualizado correctamente.");
        } else {
            console.log("Error: El PIN antiguo no coincide.");
        }
    }
}


const tarjeta1 = new TarjetaCredito(
    "Laura", 
    "1234 5678 9023 4567", 
    "316", 
    "1234", 
    "2/12");

const tarjeta2 = new TarjetaCredito(
    "Alex", 
    "1234-5678-9012-3456", 
    "123", 
    "0000", 
    "12/28"
);

// Instancia 2: Tarjeta de María
const tarjeta3 = new TarjetaCredito(
    "María", 
    "9876-5432-1098-7654", 
    "456", 
    "1234", 
    "05/27"
);

//Operaciones T1
tarjeta1.activar();
console.log(`(${tarjeta1.propietario}):`, tarjeta1.pagar(120, "1234"));

//Operaciones T2
console.log(`(${tarjeta2.propietario}):`, tarjeta2.pagar(50, "0000")); //no activa
tarjeta2.activar();
tarjeta2.pagar(50, "0000"); 

//Operaciones T3
tarjeta3.activar();
console.log(`(${tarjeta3.propietario}):`, tarjeta3.pagar(120, "9999")); //PIN incorrecto