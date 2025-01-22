// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let inputAmigo = document.querySelector("#amigo");
let listAmigo = document.querySelector("#listaAmigos");
let resultadoAmigoSecreto = document.querySelector("#resultado");
let indiceAleatorio = 0;
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

function sortearAmigo(){
    let lengthArray = arrayAmigos.length;
    let amigoSorteado = "";

    if(lengthArray === 0){
        alert("Agregue amigos, para comenzar el sorteo");
        mostrarTextoEnElemento(resultadoAmigoSecreto, "");
        return;
    }else{
        indiceAleatorio = generarIndiceAletorio(lengthArray);

        for(let i = 0; i < lengthArray; i++){
            if(indiceAleatorio == i){
                amigoSorteado = arrayAmigos[i];
                arrayAmigos.splice(indiceAleatorio,1);
                mostrarListaAmigos();
            }
        }

        mostrarTextoEnElemento(resultadoAmigoSecreto, "");
        mostrarTextoEnElemento(resultadoAmigoSecreto, `El amigo secreto sorteado es ${amigoSorteado}`);
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
    mostrarTextoEnElemento(listAmigo, "");

    for(let i = 0; i < arrayAmigos.length; i ++){
        li += `<li>${arrayAmigos[i]}</li>`;
    }

    mostrarTextoEnElemento(listAmigo, li);
}

function generarIndiceAletorio(lengthArray){
    return Math.floor(Math.random()*lengthArray);
}

function mostrarTextoEnElemento(elemento, texto){
    elemento.innerHTML = texto;
}