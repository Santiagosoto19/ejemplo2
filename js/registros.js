
var user;

function capturar(){


    function registros(usuario,password,perfil){

        this.usuario = usuario;
        this.password = password;
        this.perfil = perfil;

    }

    var usuario_captura = document.getElementById("usuario").value;
    var password_captura = document.getElementById("password").value;
    var perfil_captura = document.getElementById("perfil").value;

 var nuevoUsuario = new registros(usuario_captura,password_captura,perfil_captura);
user = nuevoUsuario;
 console.log(user);

}



var usuario = [{     identificador: "cecar",
                    clave:"123",
                    perfil: "administrativo",

}, 

{

    identificador: "cecar1",
    clave:"1234",
    perfil: "funcionario",

}
]



function iniciarSesion() {

    console.log("iniciando sesion");
    var identificador = document.getElementById("usuario");
    var clave = document.getElementById("clave");

    if (identificador.value == usuario.identificador && clave.value == usuario.clave){ //happy path

        if (usuario.perfil == "administrativo")

            window.location.href = "administrativo.html";

        else if (usuario.perfil == "funcionario")

            window.location.href = "funcionario.html";

        else if (usuario.perfil == "Docente")

            window.location.href = "docente.html";

    }   else {

        alert("usuario y/o password incorrecto")
        identificador.value = "";
        clave.value = "";
        identificador.focus();
    }

}



