function validar(){
    var result_val_correo= validar_correo();
    var result_val_direccion= validar_direccion();
    var result_val_comuna = validar_comuna();
    var result_val_codigoPostal= validar_codigoPostal();
    var result_val_movil = validar_movil();
    var result_val_fijo = validar_fijo();
    var result_val_password = validar_password();
    var result_val_repeatpassword = validar_repeatpassword();
    return(result_val_correo && result_val_direccion && result_val_comuna && result_val_codigoPostal && result_val_movil && result_val_fijo && result_val_password && result_val_repeatpassword );
}

function validar_fto_correo(correo) {
  var idx_arroa = correo.indexOf("@");
  if (idx_arroa < 1) {
      return false;
  } else {
      var idx_punto = correo.indexOf(".");
      if(idx_punto <= idx_arroa + 2 || idx_punto == correo.length - 1) {
          return false;
      }        
      return true;
  }
}

function validar_correo() {
  var correo = document.getElementById("correo").value;
  var div = document.getElementById("mnsj-correo");
  if (correo!="") {
      if (validar_fto_correo(correo)) {
          div.innerHTML = "";
          return true;
      } else {
          div.innerHTML = "El formato ingresado no es valido";
          div.className = "text-danger";
          return false;
      }
  } else {
      div.innerHTML = "El Correo no puede quedar en blanco";
      div.className = "text-danger";
      return false;
  }

  
}

function validar_direccion() {
    var  direccion = document.getElementById("dirección").value;
    var div = document.getElementById("mnsj-dirección");
    if  (direccion.length!= "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "Campo Obligatorio. No puede quedar vacío";
        div.className = "text-danger";
        return false;
    }
}

function validar_comuna() {
    var  comuna = document.getElementById("country").value;
    var div = document.getElementById("mnsj-comuna");
    if( comuna == "" || comuna== 0){
        div.innerHTML = "debe seleccionar una Localidad";
        div.className = "text-danger";
        return true;
    } else {
        div.innerHTML = "";
        return false;
    }
}

function validar_codigoPostal() {
    var codigoPostal = document.getElementById("codigoPostal").value;
    var div = document.getElementById("mnsj-codigoPostal");
    if (codigoPostal!= ""){
        if(isNaN(codigoPostal)){
            div.innerHTML = "formato ingresado no valido";
            return false
        }else{
            div.innerHTML = "";
            return true
        }     
    } else {
        div.innerHTML = "debe ingresar codigo postal";
        div.className = "text-danger"
        return false;
    }    
}

function validar_movil() {
    var  movil = document.getElementById("mobile").value;
    var div = document.getElementById("mnsj-mobile");
    if( movil == "" || movil== 0 ){
        div.innerHTML = "debe ingresar su numero";
        div.className = "text-danger";
        return true;
    } else {
        div.innerHTML = "";
        return false;
    }
}

function validar_fijo() {
    var  fijo = document.getElementById("phone-fijo").value;
    var div = document.getElementById("mnsj-fijo");
    if( fijo== "" || fijo== 0 ){
        div.innerHTML = "";
        div.className = "text-danger";
        return true;
    } else {
        div.innerHTML = "";
        return false;
    }
}


function validar_password() {
    var  password= document.getElementById("password").value;
    var div = document.getElementById("mnsj-password");
        if(password.length > 2 && password.length < 7){
            div.innerHTML = "";
            return true;
        } else{
            div.innerHTML = "la contraseña debe contener almenos 6 caracteres";
            div.className = "text-danger";
            return false;
        }  
}

function validar_repeatpassword(password){
    var password = document.getElementById("password").value;
    var repeatpassword = document.getElementById("repeatpassword").value;
    var div = document.getElementById("mnsj-password");
    var div2 = document.getElementById("mnsj-repeatpassword")
    if(val_repeatpassword != ""){
        if(repeatpassword.length > 2 && repeatpassword.length < 7){
            if(password == repeatpassword){
                div.innerHTML = "";
                return true;
            } else{
                div.innerHTML = "las contraseñas no coinciden";
                div.className = "text-danger";
                return false;
            }
        } else{
            return false;
        }
    }else{
        div2.innerHTML = "repita su contraseña";
        div2.className = "text-danger"
        return false;
    }
}

