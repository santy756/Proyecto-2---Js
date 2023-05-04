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
      descripcion:`Boku no Hero Academia cuenta la historia de Izuku Midoriya, un chico sin poderes en un mundo donde la mayoría de las personas los tienen. A pesar de esto, sueña con convertirse en un héroe y ayudar a las personas. Un encuentro con el héroe número uno, All Might, lo lleva a recibir el poder del "One For All" y a ser aceptado en una prestigiosa academia de héroes. El volumen presenta una trama emocionante y llena de acción, con personajes únicos y memorables y un estilo de arte dinámico y vibrante.`,
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
      descripcion:`Un nuevo jugador emerge en el mundo subterráneo de villanos en forma del Ejército de Liberación . Dirigido por el CEO de Detnerat Corporation, el ejército de liberación se está preparando para una nueva revolución metahumana. A sus ojos, la Liga de Villanos es un obstáculo y deben ser eliminados, pero Tomura y su banda de villanos no están dispuestos a caer en silencio.`,
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
      descripcion:`Perseguido por Lady Nagant, Deku descubre a través de la historia de la joven el lado oscuro de la sociedad de los superhéroes... Pero sus nuevos poderes y su inquebrantable determinación le permiten ganar la pelea. Desafortunadamente, el adolescente se separa cada vez más de los demás para no involucrarlos en su lucha... Solo contra todos, ¿cuánto tiempo podrá resistir?`,
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
      descripcion:`Jujutsu Kaisen sigue la historia de Yuji Itadori, un estudiante de secundaria que se une a un mundo de maldiciones y hechicería después de tratar de salvar a su amigo de ser poseído por una maldición. Se une a la organización Jujutsu, que se dedica a exorcizar maldiciones y proteger a la humanidad. La trama presenta una mezcla de acción, horror y comedia, con personajes interesantes y una historia emocionante que explora temas como la amistad y el sacrificio`,
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
      descripcion:`¡EL ATAQUE DECISIVO PARA SELLAR A GOJO SENCUENTRA EN MANOS DEL ENEMIGO! El anden del metro de la estación de Shibuya está abarrotado tanto de gente normal como de humanos remodelados, Gojô supera con creces a los espíritus malditos a pesar de estar bajo una situación de lo más cruel, de la cual no tiene escapatoria. ¡¡Y mientras tanto, junto a Itadori aparece un inesperado aliado, quien se apresura a llegar hasta el anden del metro!`,
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
      descripcion:`SUKUNA SIEMBRA EL CAOS EN EL CENTRO DE SHIBUYA. Mientras Sukuna, que tras haber obtenido la libertad de forma temporal se está comportando de un modo violento y cruel, ocasionando enormes daños en el barrio de Shibuya, Fushiguro recibe una herida mortal por un ataque sorpresa de un hechicero maldito y decide usar su último recurso. Sukuna se ha dado cuenta de que Fushiguro ha empezado un "ritual de exorcismo" y...!`,
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
        descripcion:`Kimetsu No Yaiba sigue la historia de Tanjiro Kamado, un joven que se convierte en cazador de demonios después de que su familia es asesinada por uno. Tanjiro debe aprender a luchar contra demonios mientras busca una cura para su hermana Nezuko, quien también ha sido convertida en un demonio`,
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
        descripcion:`Kimetsu No Yaiba, la trama se centra en el arco de la historia "El Tren Infinito". Tanjiro, junto con sus compañeros cazadores de demonios, aborda un tren lleno de demonios para detener a un demonio poderoso que está matando a los pasajeros. En este arco, la historia se centra en Rengoku`,
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
        descripcion:`¡EMPIEZA LA BATALLA DEFINITIVA CONTRA MUZAN! Todavía falta más de una hora para el amanecer y Muzan se muestra cada vezás feroz en la lucha. Los pilares que quedan en pie se lanzan a por el, pero podrán sus espadas alcanzarlo? Mientras, Tanjiro sigue abatido, víctima de los ataques de Muzan... ¡¡Todo el mundo se esfuerza al máximo en una batalla que está llegando al límite!!`,
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
        descripcion:`Chainsaw Man es la historia de Denji, un adolescente que carga con las inmensas deudas de su padre y que malvive como puede para saldarlas, ya sea vendiendo sus órganos o haciendo todo tipo de trabajos malpagados. Su única compañía es Pochita, un demonio motosierra.`,
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
        descripcion:`¡MOTOSIERRA CONTRA KATANA! ¿CÓMO TERMINARA ESTA BATALLA? Aki se encuentra frente a frente con el demonio que controlaba Himeno. ¡¿Que pasa por la mente a este hombre consumido por las ansias de venganza...?! Por otro lado, ¡¡Denji pelea de nuevo contra Samurai Sword!!`,
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
        descripcion:`¡DENJI SE HA VUELTO EL BLANCO DE VARIOS ASESINOS A ESCALA MUNDIAL! Denji sale en las noticias... ¡y todo el mundo se entera de su existencia! El departamento especial moviliza a todos sus agentes para protegerlo de los asesinos de varios países que ponen rumbo a Tokio, pero... ¡se desata una lucha sin cuartel que precipita un caos infernal!.`,
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

    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    
    
    if (mangaEnCarrito.some(producto => producto.codigo_unico === idManga)) {
      const indexManga = mangaEnCarrito.findIndex(producto => producto.codigo_unico === idManga)
      mangaEnCarrito[indexManga].cantidad++;
    } else {
      mangaAgregado.cantidad = 1;
      mangaEnCarrito.push(mangaAgregado)
      toastBootstrap.show()
    }

    localStorage.setItem("productoEnCarrito", JSON.stringify(mangaEnCarrito))
  }

  