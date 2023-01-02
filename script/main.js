/*

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también 
    devolver una palabra encriptada para su versión original.

*/


//obtner los elemntos html con los cuales vamos a trabajar

//obtener el textarea donde el usuario introduce el texto que quiere encriptar
const $entradaElement = document.getElementById("texto-original");
let entradaValue = $entradaElement.value;

//obtner cada uno de los botones
const $btnEncriptar = document.getElementById("btn-encriptar");
const $btnDesencriptar = document.getElementById("btn-desencriptar");


//obtner el aviso de ningun texto encontrado
const $mensaje = document.querySelector(".mensaje-container");

//obtener los elementos ocultos
//resultado
const $resultadoContainer = document.querySelector(".resultado-container");
const $resultadoElement = document.getElementById("texto-resultado");
let resultadoValue;
//btn copiar
const $btnCopiarContainer = document.querySelector(".btn-copiar-container");


//funciones

//funcion para encriptar el texto
function encriptarTexto(str) {
    let textoEncriptado;
    textoEncriptado = str.replaceAll("e","enter");
    textoEncriptado = textoEncriptado.replaceAll("i","imes");
    textoEncriptado = textoEncriptado.replaceAll("a","ai");
    textoEncriptado = textoEncriptado.replaceAll("o","ober");
    textoEncriptado = textoEncriptado.replaceAll("u","ufat");
    return textoEncriptado;
}

//funcion para desencriptar el texto

function desencriptarTexto(str){
    let textoEncriptado;
    textoEncriptado = str.replaceAll("enter","e");
    textoEncriptado = textoEncriptado.replaceAll("imes","i");
    textoEncriptado = textoEncriptado.replaceAll("ai","a");
    textoEncriptado = textoEncriptado.replaceAll("ober","o");
    textoEncriptado = textoEncriptado.replaceAll("ufat","u");
    return textoEncriptado;
}


//añadir los eventos a los elementos html necesarios

//boton encriptar
$btnEncriptar.addEventListener("click", () =>{
    entradaValue = $entradaElement.value;
    $resultadoElement.textContent = encriptarTexto(entradaValue);
});

//boton desencriptar
$btnDesencriptar.addEventListener("click", () =>{
    entradaValue = $entradaElement.value;
    $resultadoElement.textContent = desencriptarTexto(entradaValue);
});

