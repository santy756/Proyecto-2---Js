const libros_lista1 =localStorage.getItem("libros_lista")
if(!libros_lista1){
  const libros_lista = [
    {
      codigo_unico: "libro-1",
      nombre: "Game of Thrones: Volume I (en ingles)",
      precio_unitario: 11999,
      categoria: "libro",
      editorial: "RRMartin",
      imagen_ilustrativa:"../img/libros/GoT 1.png",
      descripcion:`La trama gira en torno a la lucha por el Trono de Hierro, que es el asiento de poder del reino. Después de la muerte del Rey Robert, varios personajes ambiciosos buscan aprovechar la oportunidad para tomar el trono. A través de la perspectiva de múltiples personajes, la historia se desarrolla con intriga política, luchas de poder y una amenaza creciente en el norte del reino, donde una fuerza oscura se prepara para atacar.`,
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
      descripcion:`Un cometa del color de la sangre hiende el cielo, cargado de malos augurios. Y hay razones sobradas para pensar así: los Siete Reinos se ven sacudidos por las luchas intestinas entre los nobles por la sucesión al Trono de Hierro. En la otra orilla del mar Angosto, la princesa Daenerys Targaryen conduce a su pueblo de jinetes salvajes a través del desierto. Y en los páramos helados del norte, más allá del Muro, un ejército implacable avanza hacia un territorio asolado por el caos y las guerras fratricidas.`,
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
      descripcion:`Las huestes de los fugaces reyes de Poniente, descompuestas en hordas, asuelan y esquilman una tierra castigada por la guerra e indefensa ante un invierno que se anuncia inusitadamente crudo. Las alianzas nacen y se desvanecen como volutas de humo bajo el viento helado del Norte. Ajena a las intrigas palaciegas, e ignorante del auténtico peligro en ciernes, la Guardia de la Noche se ve desbordada por los salvajes. Y al otro lado del mundo, Daenerys Targaryen intenta reclutar en las Ciudades Libres un ejército con el que desembarcar en su tierra.`,
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
      descripcion:`Harry Potter y la Orden del Fénix, sigue a Harry Potter mientras lucha contra la negación pública del regreso de Lord Voldemort. Harry, junto con sus amigos y la Orden del Fénix, se prepara para la inminente guerra mientras deben lidiar con un Ministerio de Magia cada vez más autoritario y la presión de los exámenes escolares. En este volumen, la tensión entre Harry y su enemigo, Draco Malfoy, alcanza su punto más alto, mientras Harry se enfrenta a nuevas revelaciones sobre su conexión con Voldemort.`,
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
      descripcion:`Harry Potter y el Prisionero de Azkaban, lleva a los lectores en una aventura emocionante cuando un peligroso prisionero, Sirius Black, escapa de la prisión de Azkaban y se dirige a Hogwarts en busca de Harry Potter. Mientras tanto, Harry descubre la verdad detrás de la muerte de sus padres y aprende a enfrentarse a sus miedos mientras intenta protegerse a sí mismo y a sus amigos.`,
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
      descripcion:`Harry Potter y el Misterio del Príncipe, sigue a Harry mientras investiga el pasado de Lord Voldemort para descubrir sus debilidades. Con la ayuda de su profesor de Pociones, Horace Slughorn, y un misterioso libro de hechizos perteneciente a alguien conocido como "el príncipe mestizo", Harry descubre secretos oscuros que arrojan nueva luz sobre la historia de Voldemort. Mientras tanto, el romance florece entre Ron y Hermione, mientras Harry se siente atraído hacia Ginny Weasley. Sin embargo, la tranquilidad de Hogwarts se ve amenazada cuando los Mortífagos, los seguidores de Voldemort, comienzan a atacar a los magos y brujas de la comunidad mágica.`,
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
      descripcion:`En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.`,
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
      descripcion:`La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam avanzan solos en su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal.`,
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
      descripcion:`Los ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino.`,
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
      descripcion:`Aunque varios son los autores que han contribuido a conformar los mitos de Cthullu, el núcleo de la mitología que envuelven se debe al genio del maestro de Providence, siendo sus discípulos y amigos quienes ahondaron en el camino trazado por Lovecraft y desarrollaron o completaron los senderos secundarios del conjunto. Los 13 relatos -ningún número más adecuado- que presentamos en esta cuidada edición de dos volúmenes, prologada y revisada por Luis Benítez, constituyen la columna vertebral de los mitos referidos.`,
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
      descripcion:`Este segundo volumen de Los mitos de Cthulhu comprende siete escalofriantes relatos. Tal vez el más aterrador de todos, En las montañas…,una novela en sí misma, es la demostración perfecta del estilo Lovecraft, una perfecta sincronía entre el género de terror y el de la cincia ficción: los siniestros “Primordiales” llegan a la Tierra de más allá de las estrellas para crear a la humanidad por simple aburrimiento o error. Tal descubrimiento llena de pavor a los científicos/exploradores que protagonizan la historia. Un volumen único para los amantes del género.`,
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
      descripcion:`Una selección ilustrada de los cuentos más famosos del maestro del terror, H.P. Lovecraft. Una puerta de entrada para el descubrimiento de un género que fascina a miles de lectores en el mundo. Cuatro historias del maestro indiscutido de la literatura de horror, H. P.Lovecraft, para lectores valientes: "El llamado de Cthulhu", "Sueños en la Casade la Bruja", "El extraño" y "El pantano de la luna". Seres inmemoriales que unbuen día despiertan y quieren dominar el mundo, hechiceras malvadas, engendros diabólicos, casas embrujadas y pantanos malditos, esperan en estas páginas ilustradas. Un libro que despertará en los lectores jóvenes el gusto por un género que fascina a cientos de lectores en el mundo.`,
      cantidad_stock: 10,
      stock_negativo: false,
      fecha_de_creacion: Date.now(),
      url_error: "../pages/error404.html",
    },
  ];
  localStorage.setItem("libros_lista",JSON.stringify(libros_lista))
}

const libros_agregados=localStorage.getItem("libros_lista");
const libros_agregado_objetos = JSON.parse(libros_agregados);




  const contenedorProducto_libros = document.querySelector("#contenedor-productos_libros");
  let btn_agregar_libro = document.querySelectorAll(".btn-agregar") ;

  function CargarProductos () {
    const libros_agregados=localStorage.getItem("libros_lista");
    const libros_agregado_objetos = JSON.parse(libros_agregados);
  
    libros_agregado_objetos.forEach(libro => {
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
              href="../pages/producto_id.html?id=${libro.codigo_unico}"
              class="btn btn-outline-dark"
              >Producto</a
            >
            <button
              type="button"
              class="btn btn-outline-danger btn-agregar-libro"
              id="${libro.codigo_unico}"
              
            >
              Agregar
            </button>        
          </div>
        </div>
      </div>`;
      
      contenedorProducto_libros.append(carta);

      
      
  });
  
  };
 
  
  CargarProductos ();
  btnAgregar();

  function btnAgregar() {
    btn_agregar_libro = document.querySelectorAll(".btn-agregar-libro") ;
    btn_agregar_libro.forEach(btn => {
      btn.addEventListener("click", agregarAlCarrito)
    })
  }

  let libroEnCarrito =  [];

  const libroEnCarritoLS = JSON.parse(localStorage.getItem("productoEnCarrito"));
  if (libroEnCarritoLS){
    libroEnCarrito = libroEnCarritoLS;
  } else{
    libroEnCarrito =  [];
  }
  

  function agregarAlCarrito(e) {
    const idLibro = e.currentTarget.id;
    const libroAgregado = libros_agregado_objetos.find(producto => producto.codigo_unico === idLibro)

    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    
    
    if (libroEnCarrito.some(producto => producto.codigo_unico === idLibro)) {
      const indexLibro = libroEnCarrito.findIndex(producto => producto.codigo_unico === idLibro)
      libroEnCarrito[indexLibro].cantidad++;
    } else {
      libroAgregado.cantidad = 1;
      libroEnCarrito.push(libroAgregado)
      toastBootstrap.show()
    }

    localStorage.setItem("productoEnCarrito", JSON.stringify(libroEnCarrito))
  }

  