
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
}


mostrarProductos(Productos);


const carrito = [];
function agregarAlCarrito(id){
    const producto = Productos.find(function(producto){

        return producto.id === id;
    });
    carrito.push(producto);
    console.log(carrito);
}

//boton de agregar al carrito de compras

const boton_agregarcarrito = document.querySelectorAll(".btn-carrito");

boton_agregarcarrito.forEach(function(boton){

    boton.addEventListener("click", function(){

        const id=Number(boton.dataset.id);
        agregarAlCarrito(id);
        
    });
});
