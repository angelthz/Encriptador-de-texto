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
const $textoEncriptar = document.getElementById("encriptar-texto");
let texto = $textoEncriptar.value;


//obtner cada uno de los botones
const $btnEncriptar = document.getElementById("btn-encriptar");
const $btnDesencriptar = document.getElementById("btn-desencriptar");

//obtner el aviso de ningn texto encontrado
const $mensaje = document.querySelector(".mensaje");

//obtener los elementos ocultos
//resultado
const $resultadoContainer = document.querySelector(".resultado");
const $textAreaResultado = document.getElementById("texto-encriptado");
//btn copiar
const $btnCopiarContainer = document.querySelector(".btn-copiar");


//funciones

//funcion para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado;
    console.log(`Antes: ${texto}`);
    textoEncriptado = texto.replaceAll("e","enter");
    textoEncriptado = textoEncriptado.replaceAll("i","imes");
    textoEncriptado = textoEncriptado.replaceAll("a","ai");
    textoEncriptado = textoEncriptado.replaceAll("o","ober");
    textoEncriptado = textoEncriptado.replaceAll("u","ufat");
    console.log(`Despues: ${textoEncriptado}`);
    return textoEncriptado;
}

//funcion para desencriptar el texto

function desencriptarTexto(str){

}


//añadir los eventos a los elementos html necesarios

//boton encriptar
$btnEncriptar.addEventListener("click", () =>{
    //console.log($textoEncriptar.value);
    //const res = encriptarTexto($textoEncriptar.value);
    //mandar el resutlado al elemento resultado

    //ocultar el mensaje
    const estadoRes = window.getComputedStyle($resultadoContainer).getPropertyValue("display");
    const estadoMsj = window.getComputedStyle($mensaje).getPropertyValue("display");
    const estadoBtn = window.getComputedStyle($btnCopiarContainer).getPropertyValue("display");
    console.log(estadoRes,estadoMsj,estadoRes);

    //cambiar el estado de esas propeidades css

    $mensaje.style.setProperty("display","none");
    $resultadoContainer.style.setProperty("display","flex");
    $btnCopiarContainer.style.setProperty("display","flex");

    //mostrar el resultado
});

