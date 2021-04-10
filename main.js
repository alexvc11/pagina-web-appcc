
const form = document.getElementById("form-datos");
var num_preg = document.getElementById("INnum");
const tit_preg = document.getElementById("INpreg");
const opc_A = document.getElementById("INopc_A");
const opc_B = document.getElementById("INopc_B");
const opc_C = document.getElementById("INopc_C");
const opc_D = document.getElementById("INopc_D");
const txta = document.getElementById("ta-resp-correcta");
const body = document.getElementById("body");
const Resp = document.getElementsByName("resp-correcta");




window.onload = () => {
    const contraseña = window.prompt("Contraseña:",);
    //TODO: comprobar contraseña a través de una variable de entorno en el servidor web
    //REVISAR: poner el texto de la contraseña con arteriscos.
    if(contraseña != "1234"){
        window.close();
    }
    
}
form.onsubmit = (e) => {
    //TODO: agregar implementación con la base de datos.
    

    e.preventDefault();
    for(i=0;i<Resp.length;i++){
        if(Resp[i].checked == true){
            console.log(Resp[i].value);
        }
    }

    num_preg.value = 1;
    tit_preg.value = "";
    opc_A.value = "";
    opc_B.value = "";
    opc_C.value = "";
    opc_D.value = "";
    txta.value = "";
}

