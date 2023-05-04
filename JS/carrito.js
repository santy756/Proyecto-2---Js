const productosEnCarrito = JSON.parse(localStorage.getItem("productoEnCarrito"));
const contenedorModalCarrito = document.querySelector("#Carrito");
let BotonEliminarCarrito = document.querySelectorAll(".boton_eliminar");
let CarritoContenedorVacio = document.getElementById("CarritoContenedorVacio")
const total = document.getElementById("total-compras")



function cargarProductoCarrito () {
    productosEnCarrito.forEach( producto => {
        const productoEnModal = document.createElement("productoCarrito")
        productoEnModal.innerHTML = `
        <div class="card w-100 mb-3 tarjetaProducto" >
          <div class="row g-0 tarjetaProducto">
            <div class="col-md-4 tarjetaProducto">
              <img
                src="${producto.imagen_ilustrativa}"
                class="tarjetaProducto"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre} </h5>
                <span>Cantidad: ${producto.cantidad}</span>
                <p class="card-text">Precio: $${producto.precio_unitario*producto.cantidad}</p>
                <p class="card-text">
                  <small class="text-muted">Agregado recientemente</small>
                </p>
              </div>
              <button class="btn btn-danger boton_eliminar" id="${producto.codigo_unico}">Eliminar</button>
            </div>
          </div>
        </div>
        `;
        contenedorModalCarrito.append(productoEnModal)
        
    } );
    actualizarBotonEliminar()
    actualizarTotal()
    
}

if (productosEnCarrito) {
  cargarProductoCarrito()
} else{
}

function actualizarBotonEliminar() {
  BotonEliminarCarrito = document.querySelectorAll(".boton_eliminar") ;
  BotonEliminarCarrito.forEach(btn => {
    btn.addEventListener("click", eliminarDelCarrito)
  })
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const indexProductoEliminar = productosEnCarrito.findIndex(producto => producto.codigo_unico === idBoton)
  productosEnCarrito.splice(indexProductoEliminar, 1);
 
  
  localStorage.setItem("productoEnCarrito",JSON.stringify(productosEnCarrito));
  
}

contenedorModalCarrito.addEventListener("click", _ => {
  location.reload()
})


function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio_unitario*producto.cantidad), 0) 
  total.innerHTML = `<h2>TOTAL: $${totalCalculado}</h2> <button class="btn btn-danger boton_eliminar" id=""><a href="./error404.html">Comprar ahora</a></button>`;
}