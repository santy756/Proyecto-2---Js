const productosEnCarrito = JSON.parse(localStorage.getItem("productoEnCarrito"));

const contenedorModalCarrito = document.getElementById("Carrito");
console.log(contenedorModalCarrito);



function cargarProductoCarrito () {
    productosEnCarrito.forEach( producto => {
        const productoEnModal = document.createElement("productoCarrito")
        productoEnModal.innerHTML = `
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${producto.imagen_ilustrativa}"
                class="img-fluid rounded-start"
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
            </div>
          </div>
        </div>
        `;
        contenedorModalCarrito.append(productoEnModal)
    });
    
}


cargarProductoCarrito();