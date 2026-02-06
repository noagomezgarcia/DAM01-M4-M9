class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    calcularArea(){}
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super('Rectangulo');
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base*this.altura;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super('Triangulo');
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base*this.altura) / 2;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super('Circulo');
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

const rectangulo = new Rectangulo(2, 4);
console.log(rectangulo.nombre);
console.log(rectangulo.calcularArea());

const triangulo = new Triangulo(8, 12);
console.log(triangulo.nombre);
console.log(triangulo.calcularArea());

const circulo = new Circulo (6);
console.log(circulo.nombre);
console.log(circulo.calcularArea().toFixed(2));