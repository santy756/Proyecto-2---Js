//#region lista?

//#endregion
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
const agregar = document.getElementById("agregar_stock");
const disminuir = document.getElementById("quitar_stock")

let vcodigo_unico = "";
let vnombreProd = "";
let vprecio_unitario = "";
let vcategoria = "";
let veditorial = "" ;
let vimagen_ilustrativa ="";
let vdescripcion ="";
let vcantidad_stock ="";
let vurl_error ="";


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


function CreateItem (producto) {
    return `
    
      <tr>
         <th scope="row">${contador+=1}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio_unitario}</td>
        <td>${producto.categoria}</td>
        <td>${producto.editorial}</td>
        <td><button class="btn btn-light" id="agregar_stock">+</button> ${producto.cantidad_stock} <button class="btn btn-dark" id="quitar_stock">-</button></td>
        <td><button class="btn btn-danger" id="${producto.codigo_unico}">x</button><td>
      </tr>`
}
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
})
