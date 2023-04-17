function encriptar(){

    var frase = document.getElementById("textoInput").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoAreaText").innerHTML = textoEncriptado;
}

function desencriptar(){

    var frase = document.getElementById("textoInput").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoAreaText").innerHTML = textoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#textoAreaText");
    contenido.select();
    document.execCommand("copy");
}

function borrarPlaceHolder(){
    var miTextArea = document.getElementById("miTextArea");
    if (miTextArea.value === miTextArea.placeholder) {
        miTextArea.value = "";
    }
}
