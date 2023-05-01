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
const url_error = document.getElementById("url_error");

console.log(codigo_unico)

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
        <td>${producto.cantidad_stock}</td>
        <td><button class="btn btn-danger">x</button><td>
      </tr>`
}

console.log(productos)
