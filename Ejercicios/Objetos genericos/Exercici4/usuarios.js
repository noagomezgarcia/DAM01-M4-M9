// 1. Crear el array con los objetos iniciales
let usuarios = [
    {
        nombre: "Laura",
        edad: 26,
        email: "laura@gmail.com",
        saludar: function() {
            console.log("¡Hola!, mi nombre es " + this.nombre);
        }
    },
    {
        nombre: "Lorena",
        edad: 22,
        email: "lorena@gmail.com",
        saludar: function() {
            console.log("¡Hola!, mi nombre es " + this.nombre);
        }
    },
    {
        nombre: "Emma",
        edad: 53,
        email: "emma@gmail.com",
        saludar: function() {
            console.log("¡Hola!, mi nombre es " + this.nombre);
        }
    }
];

function mostrarUsuarios() {
    usuarios.forEach(usuario => {
        console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
    });
}

mostrarUsuarios();

console.log("========== Saludos ==========");
usuarios.forEach(usuario => usuario.saludar());