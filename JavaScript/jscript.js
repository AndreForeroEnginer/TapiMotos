
const formulario = document.querySelector("#formulariocontacto");

formulario.addEventListener("submit", function(evento){
            evento.preventDefault();

        alert("formulario enviado");

});


const marca= document.querySelector("#marca");

marca.addEventListener("change", function(){
    
    console.log(marca.value);
});

const buscar= document.querySelector("#buscar");

buscar.addEventListener("input", function(){
    const texto = buscar.value.toLowerCase();
    const resultado = Productos.filter(function(producto){
        return producto.nombre.toLowerCase().includes(texto);
    });

    mostrarProductos(resultado);

});

buscar.addEventListener("keydown", function(evento){
    console.log(evento.key);
});

buscar.addEventListener("keyup", function(){
    console.log(buscar.value);
});


const button= document.querySelector(".btn-regresar");

window.addEventListener("scroll",function(){

    if(window.scrollY > 400){
        button.style.display ="block";
    }else{
        button.style.display="none";
    }
 
});

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


const contenedor =document.querySelector(".contenedor_producto");
    
    function mostrarProductos(lista){
        contenedor.innerHTML="";
        if(lista.length ===0){
            contenedor.innerHTML=`
            <p>no encontramos productos.</p>
            `;
            return;
        }
        lista.forEach(function(producto){
        
        contenedor.innerHTML += `
            <article class="productos">
                         <a href="ventana_producto.html?id=${producto.id}" class="card_funcional">
                        <img src="${producto.imagen}" alt=${producto.nombre}>
                    <div >
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p>$${producto.precio}</p>
                    </div>
                    </a>
                    <button class="btn-carrito" data-id="${producto.id}">
                        Agregar al carrito
                    </button>
            </article>
        `;
    });
    configuracionBotones();
}


mostrarProductos(Productos);


const carrito = [];
function agregarAlCarrito(id){
    const producto = Productos.find(function(producto){

        return producto.id === id;
    });
    const productoCarrito = carrito.find(function(producto){

        return producto.id===id;

    });

    if(productoCarrito){
        productoCarrito.cantidad++;
    }else{

        carrito.push({
            id:producto.id,
            nombre:producto.nombre,
            precio:producto.precio,
            imagen:producto.imagen,
            cantidad:1


        });
    }
   
    guardarCarrito();
    actualizarCantidadCarrito();
}


//funcion de guardar en el carrito donde se usa localstorage para que recuerde
//y json stringify para que traduzca objetos de la lista a texto
function guardarCarrito(){ 
localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
);
}




//actualizar la cantidad del contador del carrito 
function actualizarCantidadCarrito(){
    const contador = document.querySelector("#contador-carrito");

    if(!contador){
        return;
    }
    const carritoGuardado = localStorage.getItem("carrito");
    if(!carritoGuardado){
        contador.textContent = 0;
        return;
    }

const carrito = JSON.parse(carritoGuardado);

    let cantidadTotal = 0;
    carrito.forEach(function(producto){
        
        cantidadTotal += producto.cantidad;
    });
    contador.textContent = cantidadTotal;
}
actualizarCantidadCarrito();

function configuracionBotones(){
    const botonesCarrito = document.querySelectorAll(".btn-carrito");
    botonesCarrito.forEach(function(boton){
        boton.addEventListener("click", function(){

            const id = Number(boton.dataset.id);

            agregarAlCarrito(id);



        });



    });


}