//carga inicial de datos

const productos_base = [
    {
        codigo_unico: "1",
        nombre: "Jigokuraku #1",
        precio_unitario: 1800,
        categoria: "Manga",
        imagen_ilustrativa:"https://http2.mlstatic.com/D_NQ_NP_898816-MLA46653837171_072021-O.jpg",
        descripcion:`Gabimaru el vacío es un ninja asesino a quien capturan gracias a una traición cercana. Es sentenciado a muerte pero él no lo lamenta: estaba harto de vivir. Sin embargo, la ejecución nunca se concreta, es imposible matarlo porque su cuerpo está entrenado para resistir cualquier castigo. Creyendo que el amor que profesa por su esposa lo mantiene vivo, la verdugo le ofrece un trato: darle la oportunidad de ser perdonado de todos sus crímenes si encuentra el elixir de la vida eterna que se dice está en una isla al sur de Japón. Así, junto a otros reclutas convictos deberá enfrentarse a los incontables misterios que alberga la isla… ¡de la cual se dice que es el Paraíso sobre la Tierra!`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
    },
    {
        codigo_unico: "2",
        nombre: "Oshi no Ko #1",
        precio_unitario: 1600,
        categoria: "Manga",
        imagen_ilustrativa:"https://cdn.aprendejaponeshoy.com/18087/oshi-no-ko-vol1.jpg",
        descripcion:`Ai Hoshino es una talentosa idol de 16 años adorada por sus fans. Es la personificación de una doncella joven y pura. Pero no es oro todo lo que reluce`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
    },
    {
        codigo_unico: "3",
        nombre: "One Punch Man #1",
        precio_unitario: 2000,
        categoria: "Manga",
        imagen_ilustrativa:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/037/558/products/one-punch-man-01-e2d243927cda0f858616102260953008-640-0.jpg",
        descripcion:`¡Saitama es un héroe tan fuerte que puede acabar con las criaturas más brutales de un solo golpe!`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
    },
];


const local_storage_llaves = {
    PRODUCTOS: "productos",
    USUARIOS: "usuarios",
};


window.onload = function (){
    const productos = ObtenerLocalStorage(local_storage_llaves.PRODUCTOS)

    if(!productos) {
        AgregarLocalStorage(local_storage_llaves.PRODUCTOS, productos_base)
    }
};

function ObtenerLocalStorage(key) {
    const res = localStorage.getItem(key);
    return JSON.parse(res)
}

function AgregarLocalStorage(key, objeto) {
    localStorage.setItem(key, JSON.stringify(objeto));
}


const div_productos = document.querySelector("#agregar_producto");


if(productos_base) {
    const lista = JSON.parse(productos_base);
    lista.forEach(element => {
        console.log(element)
    });
}


function CreateCards (nombre,precio_unitario, imagen_ilustrativa,url_error) {
return `<div class="card tarjeta-categoria h-100" style="width: 18rem">
<img
  src="${imagen_ilustrativa}"
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
  <p class="card-text">Precio: <strong>$${precio_unitario}</strong></p>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <a
      href="${url_error}"
      class="btn btn-outline-dark"
      >Producto</a
    >
    <button
      type="button"
      class="btn btn-outline-danger"
      id="liveToastBtn"
    >
      Comprar
    </button>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img src="../img/icono.png" class="rounded me-2" alt="..." />
          <strong class="me-auto">BLARE</strong>
          <small></small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Añadido al carrito.</div>
      </div>
    </div>
    <!-- Scrpt Toast Boostrap -->
    <script>
      const toastTrigger = document.getElementById("liveToastBtn");
      const toastLiveExample = document.getElementById("liveToast");
      if (toastTrigger) {
        toastTrigger.addEventListener("click", () => {
          const toast = new bootstrap.Toast(toastLiveExample);

          toast.show();
        });
      }
    </script>
    <!-- Scrpt Toast Boostrap -->
  </div>
</div>
</div>`
}