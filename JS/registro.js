//#region  registro 
const contraseña_registro = document.getElementById("imputpass");
const comprobar_contraseña = document.getElementById("reimputpass");
const registrar = document.getElementById("registrar");
const email_registro = document.getElementById("imputemail");
const error_pass =document.getElementById("error_pass")
const BLARE = document.getElementById("BLARE")
let mail_reg= "";
let pass_reg="";
let comprobar_pass="";
let lista_usuarios = []

//almacenar el registro en local storage
registrar.addEventListener("click",function(e) {
    e.preventDefault();
    if(mail_reg!="" && pass_reg!="" && pass_reg==comprobar_pass ){
        localStorage.setItem("usuario", JSON.stringify({
            mail: mail_reg ,
            password: pass_reg ,
    }));
    error_pass.style.display = "none";
    BLARE.click()
    alert("se registro exitosamente")
}else if (mail_reg=="" || pass_reg=="") {
        alert("coloque la informacion necesaria");
        error_pass.style.display = "none";
    } else {
        error_pass.innerHTML = "las contraseñas deven coincidir";
        error_pass.style.display = "block";
    }
})

//almacena los valores en las variables correspondientes para ser usadas en la funcion de arriba
contraseña_registro.addEventListener("change",function(e) {
  pass_reg = e.target.value
})
email_registro.addEventListener("change",function(e){
    mail_reg = e.target.value;
})
comprobar_contraseña.addEventListener("change",function(e){
    comprobar_pass = e.target.value;
})

//#endregion