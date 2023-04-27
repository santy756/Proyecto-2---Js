const detalle = document.getElementById("detalle-producto");

const urlParams = new URLSearchParams (window.location.search);

const paramID = urlParams.get("id");

const objeto = JSON.parse(localStorage.getItem("comic_lista"));

const objeto2 = JSON.parse(localStorage.getItem("manga_lista"));

const objeto3 = JSON.parse(localStorage.getItem("libros_lista"));


console.log(objeto, objeto2, objeto3);
