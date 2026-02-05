const cuadrado = document.getElementById("cuadrado");

document.addEventListener('mousemove', (evento) => {
    // Centrar el cuadrado respecto al ratón
    const x = evento.clientX - cuadrado.offsetWidth / 2;
    cuadrado.style.left = `${x}px`;
});

