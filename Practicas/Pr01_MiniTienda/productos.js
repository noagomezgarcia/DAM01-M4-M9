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

    //Botón de añadir al carrito 
    const botonCarrito = document.createElement("button");
    botonCarrito.textContent = "AÑADIR AL CARRITO";
    botonCarrito.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });
 
    articulo.append(imagen, nombre, descripcion, precio, selectorTallas, botonCarrito);
    
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
function agregarAlCarrito(producto) {
    const camisetaEscogida = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precioBase
    };

    camisetasSeleccionadas.push(camisetaEscogida);
    console.log("Producto añadido:", camisetaEscogida);
    console.log("Carrito actual:", camisetasSeleccionadas);
}

//Que se ejecute al cargar la ventana 
window.onload = init;