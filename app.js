// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let inputAmigo = document.querySelector("#amigo");
let listAmigo = document.querySelector("#listaAmigos");
let amigo = "";


function agregarAmigo(){
    amigo = limpiarEspacios(inputAmigo.value);

    if(amigo.length == 0 || amigo == ""){
        alert("Porfavor, inserte un nombre");
        return;
    }else{
        
        if(arrayAmigos.includes(amigo)){
            alert("El amigo ingresado ya existe, ingrese uno diferente");
        }else{
            arrayAmigos.push(amigo);
        }
        
        limpiarCampoEntrada();
        mostrarListaAmigos();
    }
}

function limpiarCampoEntrada(){
    inputAmigo.value = "";
}

function limpiarEspacios(cadena){
    return cadena.trim();
}

function mostrarListaAmigos(){
    let li = "";
    listAmigo.innerHTML = "";

    for(let i = 0; i < arrayAmigos.length; i ++){
        li += `<li>${arrayAmigos[i]}</li>`;
    }

    listAmigo.innerHTML = li;
}