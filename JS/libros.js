const libros_lista = [
    {
      codigo_unico: "libro-1",
      nombre: "Game of Thrones: Volume I (en ingles)",
      precio_unitario: 11999,
      categoria: "libro",
      editorial: "RRMartin",
      imagen_ilustrativa:"../img/libros/GoT 1.png",
      descripcion:`La profecía de Blackest Night se ha hecho realidad: ¡una fuerza misteriosa está criando héroes y villanos fallecidos en un ejército de Black Lanterns no muertos! El poder combinado del Green Lantern Corps y una armada de superseres vivos ahora deben unirse en una lucha literalmente por sus vidas`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-2",
      nombre: "Game of Thrones: Volume II (en ingles)",
      precio_unitario: 5850,
      categoria: "libro",
      editorial: "RRMartin",
      imagen_ilustrativa:"../img/libros/GoT 2.png",
      descripcion:`El Batman que Ríe es la versión de Bruce Wayne de Tierra -22 del Multiverso Oscuro que se habia vuelto loco despues de ser expuesto a la Toxina del Joker despues de llevarlo al limite que transformaba a cualquier persona cerca en el proximo Joker`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-3",
      nombre: "Game of Thrones: Volume III (en ingles)",
      precio_unitario: 11600,
      categoria: "libro",
      editorial: "RRMartin",
      imagen_ilustrativa:"../img/libros/GoT 3.png",
      descripcion:`La profecía de Blackest Night se ha hecho realidad: ¡una fuerza misteriosa está criando héroes y villanos fallecidos en un ejército de Black Lanterns no muertos! El poder combinado del Green Lantern Corps y una armada de superseres vivos ahora deben unirse en una lucha literalmente por sus vidas`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-4",
      nombre: "Harry Potter y la Orden del Fenix",
      precio_unitario: 7514,
      categoria: "libro",
      editorial: "JKRowling",
      imagen_ilustrativa:"../img/libros/HP 5.png",
      descripcion:`¿Cuál es el precio de la perfección? Tony Stark ha conseguido lo que quería, pero a un precio terrible. El “efecto axis” le ha cambiado: tiene más estilo y más confianza en sí mismo que nunca, y está listo para conducir a San Francisco hasta el futuro... Pero quizás se trate de un futuro de pesadilla.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-5",
      nombre: "Harry Potter y el Prisionero de Azkaban",
      precio_unitario: 3419,
      categoria: "libro",
      editorial: "JKRowling",
      imagen_ilustrativa:"../img/libros/HP 3.png",
      descripcion:`Ambientada tras los sucesos de la Civil War, los Illumintati (Rayo Negro, Reed Richards,Tony Stark y Doctor Strange) deciden exiliar al espacio a Hulk ante el peligro que este representa para la Tierra`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-6",
      nombre: "Harry Potter y el misterio del príncipe",
      precio_unitario: 5579,
      categoria: "libro",
      editorial: "JKRowling",
      imagen_ilustrativa:"../img/libros/HP 6.png",
      descripcion:`Spider Verse es un evento que tiene como protagonistas principales a todas (o casi todas) las versiones alternativas de Spider-Man en una misma historia.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-7",
      nombre: "El Señor de los Anillos I. La Comunidad del Anillo",
      precio_unitario: 4140,
      categoria: "libro",
      editorial: "JRRTolkien",
      imagen_ilustrativa:"../img/libros/SdA 1.png",
      descripcion:`A lo largo de los años, Wolverine ha sido un guerrero, un héroe, un renegado, un samurái, un maestro… y mucho más. Logan dedicó más de un siglo a ser el mejor en lo que hace… pero incluso los mejores eventualmente desaparecen. Un virus del Microverso se alojó en el cuerpo del mutante de las garras de adamantium (tal como vimos en Wolverine: Temporada de Caza). Esto alcanzó para incapacitar su poder curativo. Ahora Logan es mortal… y ya no podrá seguir escapando de las garras de la muerte.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-8",
      nombre: "El Señor de los Anillos II. Las dos Torres",
      precio_unitario: 4140,
      categoria: "libro",
      editorial: "JRRTolkien",
      imagen_ilustrativa:"../img/libros/SdA 2.png",
      descripcion:`La historia se establece en un futuro distópico, causado por la aniquilación de todos los superhéroes del mundo a manos de algunos de los villanos del Universo Marvel.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-9",
      nombre: "El Señor de los Anillos III. El Retorno del rey",
      precio_unitario: 4140,
      categoria: "libro",
      editorial: "JRRTolkien",
      imagen_ilustrativa:"../img/libros/SdA 3.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-10",
      nombre: "Los mitos de Chutulu - H. P. Lovecraft",
      precio_unitario: 5130,
      categoria: "libro",
      editorial: "HPLovecraft",
      imagen_ilustrativa:"../img/libros/chutulu.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-11",
      nombre: "Los mitos de Chutulu II - H. P. Lovecraft",
      precio_unitario: 5130,
      categoria: "libro",
      editorial: "HPLovecraft",
      imagen_ilustrativa:"../img/libros/chutulu 2.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
    {
      codigo_unico: "libro-12",
      nombre: "Cuentos de horror para niños - H. P. Lovecraft",
      precio_unitario: 2610,
      categoria: "libro",
      editorial: "HPLovecraft",
      imagen_ilustrativa:"../img/libros/lovecraft niños.png",
      descripcion:`El Flashpoint es un evento crucial en el universo DC porque cambia el rumbo del futuro y sucede cuando The Flash viaja al pasado para reescribir la línea del tiempo sin imaginar que este en realidad es el error que desencadena una serie de eventos desafortunados que ponen en peligro la existencia de la humanidad`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
  ];

  const contenedorProducto = document.querySelector("#contenedor-productos");

  function CargarProductos () {

    contenedorProducto.innerHTML = "";
  
    libros_lista.forEach(libro => {
      const carta = document.createElement("carta")
      carta.classList.add("producto")
      carta.innerHTML = `
      <div class="card tarjeta-categoria h-100" style="width: 18rem " id="${libro.editorial}">
        <img
          src="${libro.imagen_ilustrativa}"
          class="card-img-top"
          alt="${libro.nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">Precio: <strong>$${libro.precio_unitario}</strong></p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a
              href="../pages/productos/producto 1.html"
              class="btn btn-outline-dark"
              >Producto</a
            >
            <button
              type="button"
              class="btn btn-outline-danger"
              id="liveToastBtn"
              
            >
              Agregar
            </button>        
          </div>
        </div>
      </div>`;
      
      contenedorProducto.append(carta)
  });
  
  };
  
  CargarProductos (libros_lista);



