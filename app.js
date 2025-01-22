// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let inputAmigo = document.querySelector("#amigo");
let amigo = "";


function agregarAmigo(){
    amigo = limpiarEspacios(inputAmigo.value);

    if(amigo.length == 0 || amigo == ""){
        alert("Porfavor, inserte un nombre");
        return;
    }else{
        arrayAmigos.push(amigo);
        limpiarCampoEntrada();
    }
}

function limpiarCampoEntrada(){
    inputAmigo.value = "";
}

function limpiarEspacios(cadena){
    return cadena.trim();
}