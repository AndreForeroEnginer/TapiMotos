const Productos = [
    {
        id:1,
        nombre:"Aceites",
        precio:50000,
        imagen:"../aceite.jpg",
        descripcion:"toda variedad de aceites",
        marca:"castrol",
        categoria:"Aceites"   
    },
    {
        id:2,
        nombre:"repuestos de motor",
        precio:80000,
        imagen:"../motor.jpg",
        descripcion:"toda variedad de repuestos de motor",
        marca:"honda",
        categoria:"motor"
    },
    {
        id:3,
        nombre:"baterias",
        precio:120000,
        imagen:"../bateria.jpg",
        descripcion:"toda variedad de baterias para moto",
        marca:"yuasa",
        categoria:"bateria"
    },
    {
        id:4,
        nombre:"llantas",
        precio:80000,
        imagen:"../llantas.jpg",
        descripcion:"toda variedad de llantas para moto",
        marca:"michellin",
        categoria:"llantas"
    }
    
];

const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

const producto= Productos.find(function(producto){

    return producto.id === id;

});

const nombreProducto = document.querySelector("#nombreProducto");
const descripcionProducto = document.querySelector("#descripcionProducto");
const precioProducto = document.querySelector("#precioProducto");
const imagenProducto = document.querySelector("#imagenProducto");

nombreProducto.textContent=producto.nombre;
descripcionProducto.textContent=producto.descripcion;
precioProducto.textContent=`$${producto.precio}`;
imagenProducto.src=producto.imagen;
imagenProducto.alt=producto.nombre;

