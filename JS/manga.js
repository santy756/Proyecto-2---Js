const manga_lista1 =localStorage.getItem("manga_lista")
if(!manga_lista1){
  const manga_lista = [
    {
      codigo_unico: "manga-7",
      nombre: "Boku no Hero #1",
      precio_unitario: 2000,
      categoria: "manga",
      editorial: "Ivrea",
      imagen_ilustrativa:"../img/mangas/BnH 1.png",
      descripcion:`A lo largo de los años, Wolverine ha sido un guerrero, un héroe, un renegado, un samurái, un maestro… y mucho más. Logan dedicó más de un siglo a ser el mejor en lo que hace… pero incluso los mejores eventualmente desaparecen. Un virus del Microverso se alojó en el cuerpo del mutante de las garras de adamantium (tal como vimos en Wolverine: Temporada de Caza). Esto alcanzó para incapacitar su poder curativo. Ahora Logan es mortal… y ya no podrá seguir escapando de las garras de la muerte.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "manga-8",
      nombre: "Boku no Hero #24",
      precio_unitario: 2000,
      categoria: "manga",
      editorial: "Ivrea",
      imagen_ilustrativa:"../img/mangas/BnH 24.png",
      descripcion:`La historia se establece en un futuro distópico, causado por la aniquilación de todos los superhéroes del mundo a manos de algunos de los villanos del Universo Marvel.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "manga-9",
      nombre: "Boku no Hero #33",
      precio_unitario: 2000,
      categoria: "manga",
      editorial: "Ivrea",
      imagen_ilustrativa:"../img/mangas/BnH 33.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "manga-10",
      nombre: "Jujutsu Kaisen #1",
      precio_unitario: 2000,
      categoria: "manga",
      editorial: "Panini",
      imagen_ilustrativa:"../img/mangas/jujutsu1.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "manga-11",
      nombre: "Jujutsu Kaisen #11",
      precio_unitario: 2000,
      categoria: "manga",
      editorial: "Panini",
      imagen_ilustrativa:"../img/mangas/jujutsu11.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "manga-12",
      nombre: "Jujutsu Kaisen #14",
      precio_unitario: 2000,
      categoria: "manga",
      editorial: "Panini",
      imagen_ilustrativa:"../img/mangas/jujutsu14.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
        codigo_unico: "manga-1",
        nombre: "Kimetsu No Yaiba #1",
        precio_unitario: 1800,
        categoria: "manga",
        editorial: "Ivrea",
        imagen_ilustrativa:"../img/mangas/KnY 1.png",
        descripcion:`La profecía de Blackest Night se ha hecho realidad: ¡una fuerza misteriosa está criando héroes y villanos fallecidos en un ejército de Black Lanterns no muertos! El poder combinado del Green Lantern Corps y una armada de superseres vivos ahora deben unirse en una lucha literalmente por sus vidas`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
      },
      {
        codigo_unico: "manga-2",
        nombre: "Kimetsu No Yaiba #8",
        precio_unitario: 1800,
        categoria: "manga",
        editorial: "Ivrea",
        imagen_ilustrativa:"../img/mangas/KnY 8.png",
        descripcion:`El Batman que Ríe es la versión de Bruce Wayne de Tierra -22 del Multiverso Oscuro que se habia vuelto loco despues de ser expuesto a la Toxina del Joker despues de llevarlo al limite que transformaba a cualquier persona cerca en el proximo Joker`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
      },
      {
        codigo_unico: "manga-3",
        nombre: "Kimetsu No Yaiba #22",
        precio_unitario: 1800,
        categoria: "manga",
        editorial: "Ivrea",
        imagen_ilustrativa:"../img/mangas/KnY 22.png",
        descripcion:`La profecía de Blackest Night se ha hecho realidad: ¡una fuerza misteriosa está criando héroes y villanos fallecidos en un ejército de Black Lanterns no muertos! El poder combinado del Green Lantern Corps y una armada de superseres vivos ahora deben unirse en una lucha literalmente por sus vidas`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
      },
      {
        codigo_unico: "manga-4",
        nombre: "Chainsaw man #1",
        precio_unitario: 1600,
        categoria: "manga",
        editorial: "Ivrea",
        imagen_ilustrativa:"../img/mangas/Cm 1.png",
        descripcion:`¿Cuál es el precio de la perfección? Tony Stark ha conseguido lo que quería, pero a un precio terrible. El “efecto axis” le ha cambiado: tiene más estilo y más confianza en sí mismo que nunca, y está listo para conducir a San Francisco hasta el futuro... Pero quizás se trate de un futuro de pesadilla.`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
      },
      {
        codigo_unico: "manga-5",
        nombre: "Chainsaw man #5",
        precio_unitario: 1600,
        categoria: "manga",
        editorial: "Ivrea",
        imagen_ilustrativa:"../img/mangas/Cm 5.png",
        descripcion:`Ambientada tras los sucesos de la Civil War, los Illumintati (Rayo Negro, Reed Richards,Tony Stark y Doctor Strange) deciden exiliar al espacio a Hulk ante el peligro que este representa para la Tierra`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
      },
      {
        codigo_unico: "manga-6",
        nombre: "Chainsaw man #7",
        precio_unitario: 1600,
        categoria: "manga",
        editorial: "Ivrea",
        imagen_ilustrativa:"../img/mangas/Cm 7.png",
        descripcion:`Spider Verse es un evento que tiene como protagonistas principales a todas (o casi todas) las versiones alternativas de Spider-Man en una misma historia.`,
        cantidad_stock: 10,
        stock_negativo: false,
        fecha_de_creacion: Date.now(),
        url_error: "../pages/error404.html",
      },
  ];
  localStorage.setItem("manga_lista",JSON.stringify(manga_lista))
}

const mangas_agregados=localStorage.getItem("manga_lista");
const manga_agregado_objetos = JSON.parse(mangas_agregados);

const contenedorProducto_manga = document.querySelector("#contenedor-productos_manga")
let btn_agregar_manga = document.querySelectorAll(".btn-agregar-manga") ;

  function CargarProductos () {
    const mangas_agregados=localStorage.getItem("manga_lista");
    const manga_agregado_objetos = JSON.parse(mangas_agregados);
   
  
    manga_agregado_objetos.forEach(manga => {
      const carta = document.createElement("carta")
      carta.classList.add("producto")
      carta.innerHTML = `
      <div class="card tarjeta-categoria h-100" style="width: 18rem " id="${manga.editorial}">
        <img
          src="${manga.imagen_ilustrativa}"
          class="card-img-top"
          alt="${manga.nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">${manga.nombre}</h5>
          <p class="card-text">Precio: <strong>$${manga.precio_unitario}</strong></p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a
              href="../pages/producto_id.html?id=${manga.codigo_unico}"
              class="btn btn-outline-dark"
              >Producto</a
            >
            <button
              type="button"
              class="btn btn-outline-danger btn-agregar-manga"
              id="${manga.codigo_unico}"
              
            >
              Agregar
            </button>        
          </div>
        </div>
      </div>`;
      
      contenedorProducto_manga.append(carta)
  });
  
  };
  
  CargarProductos ();

  btnAgregar();

  function btnAgregar() {
    btn_agregar_manga = document.querySelectorAll(".btn-agregar-manga") ;
    btn_agregar_manga.forEach(btn => {
      btn.addEventListener("click", agregarAlCarrito)
    })
  }

  let mangaEnCarrito =  [];

  const mangaEnCarritoLS = JSON.parse(localStorage.getItem("productoEnCarrito"));
  if (mangaEnCarritoLS){
    mangaEnCarrito = mangaEnCarritoLS;
  } else{
    mangaEnCarrito =  [];
  }
  

  function agregarAlCarrito(e) {
    const idManga = e.currentTarget.id;
    const mangaAgregado = manga_agregado_objetos.find(producto => producto.codigo_unico === idManga)
    
    
    if (mangaEnCarrito.some(producto => producto.codigo_unico === idManga)) {
      const indexManga = mangaEnCarrito.findIndex(producto => producto.codigo_unico === idManga)
      mangaEnCarrito[indexManga].cantidad++;
    } else {
      mangaAgregado.cantidad = 1;
      mangaEnCarrito.push(mangaAgregado)
    }

    localStorage.setItem("productoEnCarrito", JSON.stringify(mangaEnCarrito))
  }

  