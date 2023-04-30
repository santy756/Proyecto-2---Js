const detalle1 = document.getElementById("detalle-producto1");

const urlParams1 = new URLSearchParams (window.location.search);

const paramID1 = urlParams1.get("id");

const objeto1 = JSON.parse(localStorage.getItem("comic_lista"));


let elementoFiltrado1 = objeto1.filter(producto => producto.codigo_unico === paramID1);



elementoFiltrado1 = elementoFiltrado1[0];


detalle1.innerHTML = crearProducto();

function crearProducto() {
  return  `<div class = "contenedor-detalle-producto1"> 
   <div class="card mb-3 mx-auto" style="max-width: 1540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${elementoFiltrado1.imagen_ilustrativa}" class="img-fluid rounded-start" alt="..." id="imagen-producto-detalle1">
        </div>
        <div class="col-md-8">
          <div class="card-body ">
            <h5 class="card-title">La Noche más Oscura · DC Comic</h5>
            <p class="card-text precio">$${elementoFiltrado1.precio_unitario}</p>
            <img src="../../img/producto/credit-card.svg"> 3 cuotas sin interés de $${elementoFiltrado1.precio_unitario / 3}</img>
            <div class="d-grid gap-2 col-6 mx-auto">
              <br>
              <button class="btn btn-outline-danger" data-bs-toggle="modal"
            data-bs-target="#Carrito" type="button">AGREGAR AL CARRITO</button>
            </div>
            <br>
            <h3>Descripcion del producto</h3>
            <br>
            <p>
            ${elementoFiltrado1.descripcion} </p>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Medios de pago
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>3 cuotas sin interés de $${elementoFiltrado1.precio_unitario / 3}</strong> CFT: 0,00% - Total: $${elementoFiltrado1.precio_unitario} <br> En 1 pago: $ 11.859
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Medios de envío
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>¡A todo el pais!</strong><br>Andreani - Correo Argentino
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`
};