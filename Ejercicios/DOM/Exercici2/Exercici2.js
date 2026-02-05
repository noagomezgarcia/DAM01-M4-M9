//Esperamos a que el usuario haga clic en el botón
const btn = document.getElementById("botonAccion");

btn.addEventListener("click", function() {

    //Cambiar el contenido
    document.getElementById("titulo1").textContent = "Título actualizado";
    document.getElementById("parrafo1").textContent = "Texto actualizado";

    //Modificar atributos
    const imagen = document.getElementById("foto");
    imagen.src = "https://picsum.photos/100";
    document.getElementById("descripcion").textContent = "Imagen actualizada";

    //Modificar estilos
    const h1Estilo = document.getElementById("titulo-estilo");
    h1Estilo.style.color = "red";
    h1Estilo.style.fontSize = "32px";

    //Crear y añadir elementos
    //Crear el elemento en memoria
    const pNuevo = document.createElement("p");

    //Definir su contenido
    pNuevo.textContent = "Este es un párrafo añadido";

    //Seleccionar el contenedor padre y añadir el nuevo hijo
    const contenedor = document.getElementById("contenedor");
    contenedor.appendChild(pNuevo);

    //Feedback visual en el botón y desactivación para evitar duplicados
    btn.disabled = true;
    btn.textContent = "Cambios realizados con éxito";
});