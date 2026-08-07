const productos= document.querySelectorAll(".productos");

productos.forEach(function(producto){


producto.addEventListener("click",function(){

    const nombre = producto.querySelector("h3").textContent;
    alert("esta ingresando a " + nombre);



});


});