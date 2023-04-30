const nombreProducto = document.getElementById("datoNombre")
const precioProducto = document.getElementById("datoPrecio")
const urlProducto = document.getElementById("datoUrl")
const agregar_ele = document.getElementById("agregar-elemento")
let precio = "";
let nombre = "" ;
let url = "" ;

const elementoAgregado = [
  {
    nombre:"",
    precio:"",
    url:"",
  }
];


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

