
//#region inicio
const inicio = document.getElementById("inicio");
const mail_log = document.getElementById("imputemaillog");
const pass_log = document.getElementById("imputpasslog");
const error_en_blanco =document.getElementById("error_en_blanco");
const logout = document.getElementById("logout");
const administrar = document.getElementById("admin");
let mail_in = "";
let pass_in= "";
let logeado= false;
const user_admin = "admin";
const pass_admin = "admin";


inicio.addEventListener("click",function(e){
    const usuario_local_storage = JSON.parse(localStorage.getItem("usuario"));
    e.preventDefault();
    if (user_admin == mail_in || pass_admin == pass_in){
        error_en_blanco.style.display = "none";
        administrar.style.display = "block";
        logout.style.display = "block ";
        logeado = true;
    }else if (usuario_local_storage.mail!=mail_in || usuario_local_storage.password!=pass_in){
        error_en_blanco.style.display = "block";
        administrar.style.display = "none";
        error_en_blanco.innerHTML="los datos no coinciden";
    }else {
        error_en_blanco.style.display = "none";
        administrar.style.display = "none";
        logout.style.display = "block ";
        logeado = true;
    }
})

if (logeado = true){
    logout.style.display = "block ";
} else {
    logout.style.display = "none";
}

mail_log.addEventListener("change",function(e){
    mail_in=e.target.value
})
pass_log.addEventListener("change",function(e){
    pass_in=e.target.value
})
logout.addEventListener("click",function(e){
    e.preventDefault;
    logout.style.display = "none";
    administrar.style.display = "none";
    logeado= false;
    alert("se a cerrado sesion exitosamente")
})
//#endregion