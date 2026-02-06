class Personaje {
    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar() {
        console.log(`${this.nombre} se prepara para la batalla.`);
    }

    toString() {
        return `[${this.constructor.name}] ${this.nombre} | Nivel: ${this.nivel} | HP: ${this.puntosDeVida}`;
    }

    valueOf() {
        return this.nivel;
    }
}

class Guerrero extends Personaje {
    constructor(nombre, nivel, puntosDeVida, fuerza) {
        super(nombre, nivel, puntosDeVida);
        this.fuerza = fuerza;
    }

    atacar() {
        const impacto = this.fuerza * 2;
        console.log(`¡${this.nombre} blande su espada con una potencia de ${impacto}!`);
    }
}

class Mago extends Personaje {
    constructor(nombre, nivel, puntosDeVida, mana) {
        super(nombre, nivel, puntosDeVida);
        this.mana = mana;
    }

    atacar() {
        if (this.mana >= 10) {
            this.mana -= 10;
            console.log(`${this.nombre} lanza un hechizo arcano. Mana restante: ${this.mana}`);
        } else {
            console.log(`${this.nombre} no tiene suficiente mana para atacar.`);
        }
    }
}

const personajesCreados = [
    new Guerrero("G1", 80, 240, 15),
    new Guerrero("G2", 20, 50, 2),
    new Guerrero("G3", 110, 200, 87),
    new Mago("M1", 20, 90, 75),
    new Mago("M2", 50, 190, 200),
    new Mago("M3", 34, 120, 140),
];

//Recorrer el array y llamar a atacar()
console.log("==== TODOS ATACAN ====");
personajesCreados.forEach(p => p.atacar());

//Ordenar por nivel 
personajesCreados.sort((a, b) => a - b);

//Mostrar por consola usando el toString()
console.log("\n==== PERSONAJES ORDENADOS POR NIVEL ====");
personajesCreados.forEach(p => console.log(p.toString()));