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


//obtner cada uno de los botones
const $btnEncriptar = document.getElementById("btn-encriptar");
const $btnDesencriptar = document.getElementById("btn-desencriptar");
const $btnCopiar = document.getElementById("btn-copiar");


//obtner el aviso de ningun texto encontrado
const $mensajeContainer = document.querySelector(".mensaje-container");

//obtener los elementos ocultos
//resultado
const $resultadoContainer = document.querySelector(".resultado-container");
const $resultadoElement = document.getElementById("texto-resultado");
let resultadoValue;
//btn copiar
const $btnCopiarContainer = document.querySelector(".btn-copiar-container");

//variables
let entradaValue = $entradaElement.value;
const HIDE_ELEMENT = "hide";
const UNHIDE_ELEMENT = "unhide";


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

//funcion para ocultar y mostrar elementos ocultos

function mostrarResultado(){
    // //ocultar msj y mostrar los elementos ocultos
    $mensajeContainer.classList.replace(UNHIDE_ELEMENT, HIDE_ELEMENT);
    // //1. ocultamos el mensaje
    $resultadoContainer.classList.replace(HIDE_ELEMENT, UNHIDE_ELEMENT);
    $btnCopiarContainer.classList.replace(HIDE_ELEMENT, UNHIDE_ELEMENT);
}

function ocultarResultado(){
    //ocultar respuesta y btn-copiar
    $resultadoContainer.classList.replace(UNHIDE_ELEMENT, HIDE_ELEMENT);
    $btnCopiarContainer.classList.replace(UNHIDE_ELEMENT, HIDE_ELEMENT);

    // mostrar el mensaje
    $mensajeContainer.classList.replace(HIDE_ELEMENT,UNHIDE_ELEMENT);
}

//añadir los eventos a los elementos html necesarios

//boton encriptar
$btnEncriptar.addEventListener("click", () =>{
    entradaValue = $entradaElement.value;
    //mientras el textarea tenga texto
    if(entradaValue){
        resultadoValue = encriptarTexto(entradaValue);
        $resultadoElement.textContent = resultadoValue;
        mostrarResultado();
    }
    


});

//boton desencriptar
$btnDesencriptar.addEventListener("click", () =>{
    entradaValue = $entradaElement.value;
    if(entradaValue){
        resultadoValue = desencriptarTexto(entradaValue);
        $resultadoElement.textContent = resultadoValue;
        mostrarResultado();
    }
});


//verificar cuando el textarea del texto a encriptar esta enfocado
$entradaElement.addEventListener("input", (e) =>{
    // console.log(typeof $entradaElement.value, $entradaElement.value.length);

    if(!$entradaElement.value){
        ocultarResultado();
    }
        

})


$btnCopiar.addEventListener("click", ()=> {
    let texto = resultadoValue;
    navigator.clipboard.writeText(resultadoValue)
	.then(() => {
 		console.log("Texto escrito");
	})
	.catch(error => {
		console.log(`Ocurrió un error: ${error}`);
	})

});