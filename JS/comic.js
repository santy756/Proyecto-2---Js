//carga inicial de datos
const comic_lista1 =localStorage.getItem("comic_lista")
if(!comic_lista1){
  const comic_lista = [
    {
      codigo_unico: "comic-1",
      nombre: "La Noche más Oscura",
      precio_unitario: 11859,
      categoria: "comic",
      editorial: "DC Comics",
      imagen_ilustrativa:"../img/comic/green-latern-noche-mas-oscura.png",
      descripcion:`La profecía de Blackest Night se ha hecho realidad: ¡una fuerza misteriosa está criando héroes y villanos fallecidos en un ejército de Black Lanterns no muertos! El poder combinado del Green Lantern Corps y una armada de superseres vivos ahora deben unirse en una lucha literalmente por sus vidas`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-2",
      nombre: "El Batman que Ríe",
      precio_unitario: 8933,
      categoria: "comic",
      editorial: "DC Comics",
      imagen_ilustrativa:"../img/comic/bat q rie.png",
      descripcion:`El Batman que Ríe es la versión de Bruce Wayne de Tierra -22 del Multiverso Oscuro que se habia vuelto loco despues de ser expuesto a la Toxina del Joker despues de llevarlo al limite que transformaba a cualquier persona cerca en el proximo Joker`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-3",
      nombre: "Injustice: Gods Among us",
      precio_unitario: 10738,
      categoria: "comic",
      editorial: "DC Comics",
      imagen_ilustrativa:"../img/comic/injustice.png",
      descripcion:`La profecía de Blackest Night se ha hecho realidad: ¡una fuerza misteriosa está criando héroes y villanos fallecidos en un ejército de Black Lanterns no muertos! El poder combinado del Green Lantern Corps y una armada de superseres vivos ahora deben unirse en una lucha literalmente por sus vidas`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-4",
      nombre: "Superior Iron Man",
      precio_unitario: 9839,
      categoria: "comic",
      editorial: "Marvel",
      imagen_ilustrativa:"../img/comic/superior iron man.png",
      descripcion:`¿Cuál es el precio de la perfección? Tony Stark ha conseguido lo que quería, pero a un precio terrible. El “efecto axis” le ha cambiado: tiene más estilo y más confianza en sí mismo que nunca, y está listo para conducir a San Francisco hasta el futuro... Pero quizás se trate de un futuro de pesadilla.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-5",
      nombre: "Hulk: Planet Hulk",
      precio_unitario: 10374,
      categoria: "comic",
      editorial: "Marvel",
      imagen_ilustrativa:"../img/comic/planeta hulk.png",
      descripcion:`Ambientada tras los sucesos de la Civil War, los Illumintati (Rayo Negro, Reed Richards,Tony Stark y Doctor Strange) deciden exiliar al espacio a Hulk ante el peligro que este representa para la Tierra`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-6",
      nombre: "Spider-Man: Spider-Verse",
      precio_unitario: 11508,
      categoria: "comic",
      editorial: "Marvel",
      imagen_ilustrativa:"../img/comic/into the spiderverse.png",
      descripcion:`Spider Verse es un evento que tiene como protagonistas principales a todas (o casi todas) las versiones alternativas de Spider-Man en una misma historia.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-7",
      nombre: "La Muerte de Wolverine",
      precio_unitario: 7286,
      categoria: "comic",
      editorial: "DC Comics",
      imagen_ilustrativa:"../img/comic/death of wolverine.png",
      descripcion:`A lo largo de los años, Wolverine ha sido un guerrero, un héroe, un renegado, un samurái, un maestro… y mucho más. Logan dedicó más de un siglo a ser el mejor en lo que hace… pero incluso los mejores eventualmente desaparecen. Un virus del Microverso se alojó en el cuerpo del mutante de las garras de adamantium (tal como vimos en Wolverine: Temporada de Caza). Esto alcanzó para incapacitar su poder curativo. Ahora Logan es mortal… y ya no podrá seguir escapando de las garras de la muerte.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-8",
      nombre: "Wolverine: Old man Logan",
      precio_unitario: 12605,
      categoria: "comic",
      editorial: "DC Comics",
      imagen_ilustrativa:"../img/comic/old man logan.png",
      descripcion:`La historia se establece en un futuro distópico, causado por la aniquilación de todos los superhéroes del mundo a manos de algunos de los villanos del Universo Marvel.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "comic-9",
      nombre: "Flashpoint",
      precio_unitario: 11039,
      categoria: "comic",
      editorial: "DC Comics",
      imagen_ilustrativa:"../img/comic/flashpoint.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
  ]
  localStorage.setItem("comic_lista",JSON.stringify(comic_lista))
}




const comics_agregados=localStorage.getItem("comic_lista");
const comic_agregado_objetos = JSON.parse(comics_agregados);



const contenedorProducto = document.querySelector("#contenedor-productos");
let btn_agregar_comic = document.querySelectorAll(".btn_agregar_comic") ;

function CargarProductos () {
  
  

  comic_agregado_objetos.forEach(comic => {
    const carta = document.createElement("carta")
    carta.classList.add("producto")
    carta.innerHTML = `
    <div class="card tarjeta-categoria h-100" style="width: 18rem " id="${comic.editorial}">
      <img
        src="${comic.imagen_ilustrativa}"
        class="card-img-top"
        alt="${comic.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">${comic.nombre}</h5>
        <p class="card-text">Precio: <strong>$${comic.precio_unitario}</strong></p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a
            href="../pages/producto_id.html?id=${comic.codigo_unico}"
            class="btn btn-outline-dark"
            >Producto</a
          >
          <button
            type="button"
            class="btn btn-outline-danger btn_agregar_comic"
            id="${comic.codigo_unico}"
            
          >
            Agregar
          </button>        
        </div>
      </div>
    </div>`;
    
    contenedorProducto.append(carta)
});

};


CargarProductos ();

btnAgregarComic();

  function btnAgregarComic() {
    btn_agregar_comic = document.querySelectorAll(".btn_agregar_comic") ;
    btn_agregar_comic.forEach(btn => {
      btn.addEventListener("click", agregarAlCarrito)
    })
  }

  const productosEnCarrito =  [];

  function agregarAlCarrito(e) {
    const idComic = e.currentTarget.id;
    console.log(idComic);
    const comicAgregado = comic_agregado_objetos.find(producto => producto.codigo_unico === idComic)
    
    
    
    if (productosEnCarrito.some(producto => producto.codigo_unico === idComic)) {
      const indexComic = productosEnCarrito.findIndex(producto => producto.codigo_unico === idComic)
      productosEnCarrito[indexComic].cantidad++;
    } else {
      comicAgregado.cantidad = 1;
      productosEnCarrito.push(comicAgregado);
    }

    localStorage.setItem("productoEnCarrito", JSON.stringify(productosEnCarrito))
  }
