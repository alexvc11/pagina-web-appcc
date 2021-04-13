//SCHEMA
'use strict';
const mongoose = require('mongoose');

const DB = new mongoose.Schema({
    N: Number,
    tit_preg: String,
    Opc_A: String,
    Opc_B: String,
    Opc_C: String,
    Opc_D: String,
    Resp: String,
    Resp_TXTA: String
});
//CÓDIGO
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
            var respCorrecta = Resp[i].value;
        }
    }
    const data = new DB({
        N: num_preg.value,
        tit_preg: tit_preg.value,
        Opc_A: opc_A.value,
        Opc_B: opc_B.value,
        Opc_C: opc_C.value,
        Opc_D: opc_D.value,
        Resp: respCorrecta,
        Resp_TXTA: txta.value,
    })
    data.save().then(window.alert("La pregunta ha sido guardada correctamente")).then(() => {
        num_preg.value = 1;
        tit_preg.value = "";
        opc_A.value = "";
        opc_B.value = "";
        opc_C.value = "";
        opc_D.value = "";
        txta.value = "";
    });

    
}

