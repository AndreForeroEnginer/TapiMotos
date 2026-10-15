let carrito=[];

const carritoGuardado = localStorage.getItem("carrito");

if(carritoGuardado){
    carrito = json.parse(carritoGuardado);
}

const contenedorCarrito = document.querySelector("#contenedorCarrito");

function mostrarCarrito(){
    contenedorCarrito.innerHTML= "";
    carrito.forEach(function(producto){
        contenedorCarrito.innerHTML +=` 
            <article class="producto-carrito">
                <img
                src="${producto.imagen}"
                alt="${producto.imagen}"
                >
                <h3>
                ${producto.nombre}
                </h3>
                <p>
                    precio: $${producto.precio}
                </p>
                <div>
                    <button class="btn-menos data-id="${producto.id}">
                    -
                    </button>
                     <span>
                        ${producto.cantidad}
                    </span>
                    <button class="btn-mas data-id="${producto.id}">
                    +
                    </button>
                </div>
                <p>
                    Subtotal: $${producto.precio * producto.cantidad}
                </p>
                <button class="btn-eliminar data-id="${producto.id}">
                Eliminar
                </button>
                
            </article>
        `; 
    });
}

function guardarCarrito(){
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)

    );
}

function aumentarCantidad(id){
    const producto = carrito.find(function(producto){

        return producto.id === id;

    });
    producto.cantidad++;
    guardarCarrito();
    actualizarCarrito();
}

function disminuirCantidad(id){
    const producto = carrito.find(function(producto){

        return producto.id === id;

    });
    if(producto.cantidad>1){
        producto.cantidad--;
    }
    guardarCarrito();
    actualizarCarrito();
}

function eliminarProducto(id){
    const producto = carrito.findIndex(function(producto){
        return producto.id === id;

    });
    carrito.splice(indice, 1);
    guardarCarrito();
    actualizarCarrito();
}

function vaciarCarrito(){
    carrito.splice(0, carrito.length);

    guardarCarrito();
    actualizarCarrito();

}
function actualizarCarrito(){
    mostrarCarrito();
    configurarBotones();
    mostrarTotal();    
}








function configurarBotones(){
    const botonesMas = document.querySelectorAll(".btn-mas");
    botonesMas.forEach(function(boton){
        boton.addEventListener("click", function(){

            const id = Number(boton.dataset.id);
            aumentarCantidad(id);

        });

    });

    const botonesMenos = document.querySelectorAll(".btn-menos");
    botonesMenos.forEach(function(boton){
        boton.addEventListener("click", function(){

            const id = Number(boton.dataset.id);
            disminuirCantidad(id);

        });

    });

    const botonesEliminar = document.querySelectorAll(".btn-eliminar");

    botonesEliminar.forEach(function(boton){
        boton.addEventListener("click",function(){

            const id = Number(boton.dataset.id);
            eliminarProducto(id);
        });
    });

    const botonVaciar = document.querySelector("#vaciarCarrito");

    botonVaciar.addEventListener("click", function(){

        vaciarCarrito();
    });
    
}

function mostrarTotal(){
    const total = carrito.reduce(function(acumulador, producto){

        return acumulador +(producto.precio * producto.cantidad);

    }, 0);
    const elementoTotal = document.querySelector("#totalCarrito");

    elementoTotal.textContent= "$" + total;

}

actualizarCarrito();
