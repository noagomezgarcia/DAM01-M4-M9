const productosJSON = `[
  {
    "id": "TSH01",
    "nombre": "MACACARENA",
    "descripcion": "Quan balles sense vergonya i el ritme et domina.",
    "precioBase": 19.95,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro", "mostaza"],
    "imagenes": {
      "blanco": "img/MACACARENA.png",
      "negro": "img/MACACARENA_BLACK.png",
      "mostaza": "img/MACACARENA.png"
    },
    "tags": ["nuevo"]
  },
  {
    "id": "TSH02",
    "nombre": "NINETIES MODE",
    "descripcion": "Un homenatge pixelat als anys 90.",
    "precioBase": 21.50,
    "tallas": ["S", "M", "L", "XL", "XXL"],
    "colores": ["gris", "negro"],
    "imagenes": {
      "gris": "img/NINETIES.png",
      "negro": "img/NINETIES_BLACK.png"
    },
    "tags": ["retro"]
  },
  {
    "id": "TSH03",
    "nombre": "RESERVOIR INVADERS",
    "descripcion": "Quan Tarantino coneix els videojocs clàssics.",
    "precioBase": 22.90,
    "tallas": ["M", "L", "XL"],
    "colores": ["azul", "negro"],
    "imagenes": {
      "azul": "img/RESERVOIR.png",
      "negro": "img/RESERVOIR_BLACK.png"
    },
    "tags": ["edicion-especial"]
  },
  {
    "id": "TSH04",
    "nombre": "VITRUVIAN CODE",
    "descripcion": "Art, codi i proporció perfecta.",
    "precioBase": 24.00,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro"],
    "imagenes": {
      "blanco": "img/VITRUVIAN.png",
      "negro": "img/VITRUVIAN_BLACK.png"
    },
    "tags": ["premium"]
  }
]`;

const listaProductos = JSON.parse(productosJSON);
let camisetasSeleccionadas = [];

//Función init
function init() {
    const seccion = document.createElement("section");
    seccion.id = "contenedor-productos";
    document.body.appendChild(seccion);
    
    muestraProductos(listaProductos, seccion);
}

//Itera sobre la lista  de cada producto
function muestraProductos(productos, contenedor) {
    productos.forEach(producto => {
        const articulo = crearArticulo(producto);
        contenedor.appendChild(articulo);
    });
}

//Crea el article de cada camiseta
function crearArticulo(producto) {
    const articulo = document.createElement("article");
    articulo.classList.add("producto-card");

    //Imagen (la primera por defecto)
    const imagen = document.createElement("img");
    imagen.src = Object.values(producto.imagenes)[0];
    imagen.alt = producto.nombre;

    //Información
    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.classList.add("precio");
    precio.textContent = `${producto.precioBase.toFixed(2)}€`;

    //Selector de tallas
    const selectorTallas = crearSelectorTallas(producto.tallas);

    //Selector de color
    const selectorColores = crearSelectorColores(producto, imagen);

    //Botón de añadir al carrito 
    const botonCarrito = document.createElement("button");
    botonCarrito.textContent = "AÑADIR AL CARRITO";
    botonCarrito.addEventListener("click", () => {
        agregarAlCarrito(producto, articulo);
    });
 
    articulo.append(imagen, nombre, descripcion, precio, selectorTallas, selectorColores, botonCarrito);
    
    return articulo;
}

//Crea los botones de selección de talla
function crearSelectorTallas(tallas) {
    const contenedorTallas = document.createElement("div");
    contenedorTallas.classList.add("selector-tallas");

    const etiqueta = document.createElement("span");
    etiqueta.textContent = "Talla: ";
    contenedorTallas.appendChild(etiqueta);

    tallas.forEach(talla => {
        const btnTalla = document.createElement("button");
        btnTalla.textContent = talla;
        btnTalla.type = "button";
        
        btnTalla.addEventListener("click", (e) => {
            //marcar selección
            const hermanos = e.target.parentElement.querySelectorAll("button");
            hermanos.forEach(btn => btn.classList.remove("seleccionada"));
            e.target.classList.add("seleccionada");
            e.target.dataset.talla = talla; //Guardamos la talla seleccionada
        });

        contenedorTallas.appendChild(btnTalla);
    });

    return contenedorTallas;
}

//Manejar el carrito
function agregarAlCarrito(producto, articulo) {
    //Buscar la talla seleccionada
    const botonTalla = articulo.querySelector(".selector-tallas .seleccionada");
    const talla = botonTalla ? botonTalla.textContent : null;

    //Buscar el color seleccionado usando el dataset
    const color = articulo.querySelector(".selector-colores").dataset.colorSeleccionado;

    //Validación
    if (!talla) {
        alert("Por favor, selecciona una talla antes de añadir.");
        return;
    }

    //Crear el objeto final
    const camisetaEscogida = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precioBase,
        talla: talla,
        color: color
    };

    camisetasSeleccionadas.push(camisetaEscogida);
    console.log("Añadido:", camisetaEscogida);
}

//Función para crear los botones de los colores de las camisetas
function crearSelectorColores(producto, imagenProducto) {
    const contenedorColores = document.createElement("div");
    contenedorColores.classList.add("selector-colores");

    const etiqueta = document.createElement("span");
    etiqueta.textContent = "Color: ";
    contenedorColores.appendChild(etiqueta);

    //Mapa para cambiar nombres de texto a colores de CSS
    const mapaColores = {
        "blanco": "#FFFFFF",
        "negro": "#000000",
        "mostaza": "#E1AD01",
        "gris": "#808080",
        "azul": "#1a73e8"
    };

    producto.colores.forEach((color, index) => {
        const btnColor = document.createElement("button");
        btnColor.type = "button";
        btnColor.classList.add("boton-color");
        btnColor.title = color; //Muestra el nombre al pasar el ratón

        //Asignamos el color de fondo usando el mapa o nombre
        btnColor.style.backgroundColor = mapaColores[color] || color;

        //Seleccionar el primero por defecto
        if (index === 0) btnColor.classList.add("seleccionado");

        btnColor.addEventListener("click", (e) => {
            //Gestión visual
            const hermanos = contenedorColores.querySelectorAll("button");
            hermanos.forEach(btn => btn.classList.remove("seleccionado"));
            btnColor.classList.add("seleccionado");

            //Buscamos la ruta en el objeto imagenes
            const nuevaImagen = producto.imagenes[color];
            if (nuevaImagen) {
                imagenProducto.src = nuevaImagen;
            }

            //Guardar el dato para el carrito con dataset
            contenedorColores.dataset.colorSeleccionado = color;
        });

        contenedorColores.appendChild(btnColor);
    });

    //Guardamos el color por defecto en el contenedor
    contenedorColores.dataset.colorSeleccionado = producto.colores[0];

    return contenedorColores;
}

//Que se ejecute al cargar la ventana 
window.onload = init;