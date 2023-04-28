const detalle = document.getElementById("detalle-producto");

const urlParams = new URLSearchParams (window.location.search);

const paramID = urlParams.get("id");

const objeto = JSON.parse(localStorage.getItem("comic_lista"));

const objeto2 = JSON.parse(localStorage.getItem("manga_lista"));

const objeto3 = JSON.parse(localStorage.getItem("libros_lista"));


let elementoFiltrado = objeto.filter(producto => producto.codigo_unico === paramID);
let elementoFiltrado2 = objeto2.filter(producto => producto.codigo_unico === paramID);
let elementoFiltrado3 = objeto.filter(producto => producto.codigo_unico === paramID);



elementoFiltrado = elementoFiltrado[0];
elementoFiltrado2 = elementoFiltrado2[0];
elementoFiltrado3 = elementoFiltrado3[0];

console.log(elementoFiltrado);


detalle.innerHTML = crearProducto();

function crearProducto() {
  return  `<div class = "contenedor-detalle-producto"> 
   <div class="card mb-3 mx-auto" style="max-width: 1540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${elementoFiltrado.imagen_ilustrativa}" class="img-fluid rounded-start" alt="..." id="imagen-producto-detalle">
        </div>
        <div class="col-md-8">
          <div class="card-body ">
            <h5 class="card-title">La Noche más Oscura · DC Comic</h5>
            <p class="card-text precio">$${elementoFiltrado.precio_unitario}</p>
            <img src="../../img/producto/credit-card.svg"> 3 cuotas sin interés de $${elementoFiltrado.precio_unitario / 3}</img>
            <div class="d-grid gap-2 col-6 mx-auto">
              <br>
              <button class="btn btn-outline-danger" data-bs-toggle="modal"
            data-bs-target="#Carrito" type="button">AGREGAR AL CARRITO</button>
            </div>
            <br>
            <h3>Descripcion del producto</h3>
            <br>
            <p>
            ${elementoFiltrado.descripcion} </p>
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
                  <strong>3 cuotas sin interés de $${elementoFiltrado.precio_unitario / 3}</strong> CFT: 0,00% - Total: $${elementoFiltrado.precio_unitario} <br> En 1 pago: $ 11.859
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