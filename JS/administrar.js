
//#region lista_base
const producto_lista = localStorage.getItem('producto_lista');
if (!producto_lista){
  const producto_lista = [
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
localStorage.setItem("producto_lista",JSON.stringify(producto_lista))
}
//#endregion
//#region llamada de id y constantes
const productos = JSON.parse(localStorage.getItem("producto_lista"));
const table = document.getElementById("table");
const codigo_unico = document.getElementById("codigo_unico");
const nombreProd = document.getElementById("nombre");
const precio_unitario = document.getElementById("precio_unitario");
const categoria = document.getElementById("categoria");
const editorial = document.getElementById("editorial");
const imagen_ilustrativa = document.getElementById("imagen_ilustrativa");
const descripcion = document.getElementById("descripcion");
const cantidad_stock = document.getElementById("cantidad_stock");
const agregar_producto = document.getElementById("agregar_producto");



let vcodigo_unico = "";
let vnombreProd = "";
let vprecio_unitario = "";
let vcategoria = "";
let veditorial = "" ;
let vimagen_ilustrativa ="";
let vdescripcion ="";
let vcantidad_stock ="";
let vurl_error ="";
//#endregion
const admin_loged = localStorage.getItem("sesion")
const error_papu = document.getElementById("adonde_vas_papu") 
const admin_loged_obj = JSON.parse(admin_loged)
function problemitas (){
  if (admin_loged_obj.sesion_admin == false){
    error_papu.click()
  }
}
problemitas()

//#region creacion de tabla
let contador = 0;

let htmlString = `<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Precio Unitario</th>
    <th scope="col">Categoria</th>
    <th scope="col">Editorial</th>
    <th scope="col">Cantidad Stock</th>
  </tr>
</thead>
<tbody>`;

productos.forEach(producto => {
    htmlString += CreateItem(producto)
});

htmlString += "</tbody></table>";
table.innerHTML = htmlString;
const boton_borrar = document.querySelectorAll("#eliminar")
const agregar = document.querySelectorAll("#agregar_stock");
const disminuir = document.querySelectorAll("#quitar_stock")

function CreateItem (producto) {
    return `
    
      <tr>
         <th scope="row">${contador+=1}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio_unitario}</td>
        <td>${producto.categoria}</td>
        <td>${producto.editorial}</td>
        <td><button class="btn btn-light" id="agregar_stock" name = "${producto.codigo_unico}">+</button> ${producto.cantidad_stock} <button class="btn btn-dark" id="quitar_stock"name = "${producto.codigo_unico}">-</button></td>
        <td><button class="btn btn-danger" id="eliminar" name ="${producto.codigo_unico}">x</button><td>
      </tr>`
}
//#endregion
//#region   agregar producto
codigo_unico.addEventListener("change",function (e) {
  vcodigo_unico = e.target.value
})
nombreProd.addEventListener("change",function (e) {
  vnombreProd = e.target.value
})
precio_unitario.addEventListener("change",function (e) {
  vprecio_unitario = e.target.value
})
categoria.addEventListener("change",function (e) {
  vcategoria = e.target.value
})
editorial.addEventListener("change",function (e) {
  veditorial = e.target.value
})
imagen_ilustrativa.addEventListener("change",function (e) {
  vimagen_ilustrativa = e.target.value
})
descripcion.addEventListener("change",function (e) {
  vdescripcion = e.target.value
})
cantidad_stock.addEventListener("change",function (e) {
  vcantidad_stock = +e.target.value
})

agregar_producto.addEventListener("click",function (e) {
  
  e.preventDefault()
  const producto_agregado ={
    codigo_unico: vcodigo_unico,
    nombre: vnombreProd,
    precio_unitario:vprecio_unitario,
    categoria: vcategoria,
    editorial: veditorial,
    imagen_ilustrativa:vimagen_ilustrativa,
    descripcion:vdescripcion,
    cantidad_stock: vcantidad_stock,
    stock_negativo: false,
    fecha_de_creacion: Date.now(),
    url_error: "../pages/error404.html",
  }
  if (vcodigo_unico == ""){
    alert("datos incompletos")
  } else {
    const productos_agregados = localStorage.getItem("producto_lista");
  const producto_agregado_objetos =JSON.parse(productos_agregados);
  producto_agregado_objetos.push(producto_agregado);
  localStorage.setItem("producto_lista",JSON.stringify(producto_agregado_objetos));
  window.location.reload();
  if (vcategoria == "manga"){
    const mangas_agregados=localStorage.getItem("manga_lista");
    const manga_agregado_objetos = JSON.parse(mangas_agregados);
    manga_agregado_objetos.push(producto_agregado);
    localStorage.setItem("manga_lista",JSON.stringify(manga_agregado_objetos))
  } else if (vcategoria== "comic"){
    const comics_agregados=localStorage.getItem("comic_lista");
    const comic_agregado_objetos = JSON.parse(comics_agregados);
    comic_agregado_objetos.push(producto_agregado);
    localStorage.setItem("comic_lista",JSON.stringify(comic_agregado_objetos))
  }else {
    const libros_agregados=localStorage.getItem("libros_lista");
    const libros_agregado_objetos = JSON.parse(libros_agregados);
    libros_agregado_objetos.push(producto_agregado);
    localStorage.setItem("libros_lista",JSON.stringify(libros_agregado_objetos))
  }
  }
})
//#endregion
//#region   eliminar producto
boton_borrar.forEach(btn => {
  btn.addEventListener("click",function(e){
    const lista_borrar =localStorage.getItem("producto_lista")
    const lista_borrar_obj =JSON.parse(lista_borrar)
    const nueva_lista = lista_borrar_obj.filter((productos) => productos.codigo_unico != e.target.name);
    localStorage.setItem("producto_lista",JSON.stringify(nueva_lista))
    if (e.target.name.charAt(0)== "m"){
      const mangas_agregados=localStorage.getItem("manga_lista");
    const manga_agregado_objetos = JSON.parse(mangas_agregados);
    const nueva_lista_manga = manga_agregado_objetos.filter((productos) => productos.codigo_unico != e.target.name);
    localStorage.setItem("manga_lista",JSON.stringify(nueva_lista_manga))
    } else if (e.target.name.charAt(0)== "c"){
      const comics_agregados=localStorage.getItem("comic_lista");
      const comic_agregado_objetos = JSON.parse(comics_agregados);
      const nueva_lista_comic = comic_agregado_objetos.filter((productos) => productos.codigo_unico != e.target.name);
    localStorage.setItem("comic_lista",JSON.stringify(nueva_lista_comic))
    }else if (e.target.name.charAt(0)== "l"){
      const libros_agregados=localStorage.getItem("libros_lista");
      const libros_agregado_objetos = JSON.parse(libros_agregados);
      const nueva_lista_libro = libros_agregado_objetos.filter((productos) => productos.codigo_unico != e.target.name);
    localStorage.setItem("libros_lista",JSON.stringify(nueva_lista_libro))
    }else {}
    window.location.reload()
  })
})
//#endregion
//#region Stock modificar stock (el modificar precio deveria ser parecido pero bueno)

agregar.forEach(btn => {
  btn.addEventListener("click",function(e){
    const lista_a_agregar =localStorage.getItem("producto_lista");
    const lista_a_agregar_obj =JSON.parse(lista_a_agregar);
    lista_a_agregar_obj.forEach(producto =>{
      if (producto.codigo_unico == e.target.name){
        producto.cantidad_stock ++
        localStorage.setItem("producto_lista",JSON.stringify(lista_a_agregar_obj))
      }
    })
    window.location.reload()
 })
})

disminuir.forEach(btn => {
  btn.addEventListener("click",function(e){
    const lista_a_restar =localStorage.getItem("producto_lista");
const lista_a_restar_obj =JSON.parse(lista_a_restar);
    lista_a_restar_obj.forEach(producto =>{
      if (producto.codigo_unico == e.target.name){
        producto.cantidad_stock --
        localStorage.setItem("producto_lista",JSON.stringify(lista_a_restar_obj))
      }
    })
    window.location.reload()
 })
})

//#endregion
