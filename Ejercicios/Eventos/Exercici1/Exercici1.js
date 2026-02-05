const boton1 = document.getElementById("boton1");

boton1.addEventListener("click", () => {
    alert("Un click");
});

const boton2 = document.getElementById("boton2");

boton2.addEventListener("dblclick", () => {
    alert("Doble click");
});

const capa = document.getElementById("capa");

capa.addEventListener("mousemove", (evento) => {
    console.log("La posicion de X es: ", evento.clientX, 
                "La posicion de Y es: ", evento.clientY
    );
});

const inputTexto = document.getElementById("inputTexto");

inputTexto.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        alert("Se ha pulsado Enter");
    }
});