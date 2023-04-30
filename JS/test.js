const nombreProducto = document.getElementById("datoNombre")
const precioProducto = document.getElementById("datoPrecio")
const urlProducto = document.getElementById("datoUrl")
const agregar_ele = document.getElementById("agregar-elemento")
let precio = "";
let nombre = "" ;
let url = "" ;

const key = "producto_a_cargar" ;


agregar_ele.addEventListener("click",function(e) {
   //terminar
})

nombreProducto.addEventListener("change",function(e) {
  nombre = e.target.value;
})
precioProducto.addEventListener("change",function(e) {
  elementoAgregado.precio = e.target.value;
})
urlProducto.addEventListener("change",function(e) {
  url = e.target.value;
})

agregar_ele.addEventListener("click",function(e) {
  console.log(elementoAgregado.precio)
})
console.log(elementoAgregado)

class producto {
       codigo_unico= "";
        nombre= "";
        precio_unitario="";
        categoria= "";
        editorial= "";
        imagen_ilustrativa="";
        descripcion=``;
        cantidad_stock= 10;
        stock_negativo= false;
        fecha_de_creacion= Date.now();
        url_error= "../pages/error404.html";
        constructor(codigo_unico,nombre,precio_unitario,categoria,editorial,imagen_ilustrativa,descripcion,cantidad_stock,stock_negativo,fecha_de_creacion,url_error){
        this.codigo_unico= codigo_unico;
        this.nombre= nombre;
        this.precio_unitario=precio_unitario;
        this.categoria= categoria;
        this.editorial= editorial;
        this.imagen_ilustrativa=imagen_ilustrativa;
        this.descripcion=descripcion;
        this.cantidad_stock= cantidad_stock;
        this.stock_negativo= stock_negativo;
        this.fecha_de_creacion= fecha_de_creacion;
        this.url_error= url_error;
        }
}
