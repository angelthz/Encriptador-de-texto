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
let textoEncriptado;
//console.log(texto);


//obtner el textarea donde se va a mostrar el resultado
const $resultado = document.getElementById("texto-encriptado");

//obtner el aviso de ningn texto encontrado
const $avisoTexto = document.querySelector(".mensaje");

//obtner cada uno de los botones
const $btnEncriptar = document.getElementById("btn-encriptar");
const $btnDesencriptar = document.getElementById("btn-desencriptar");
const $btnCopiar = document.getElementById("btn-copiar-texto");



//
// console.log($textoEncriptar);
// console.log($resultado);



//añadir los eventos a los elementos html necesarios
//botones

//encriptar el texto

//para encriptar el texto debemos:
/*
    omitir letras en mayusculas, con acento y caracteres especiales
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    
*/

console.log(texto)
textoEncriptado = texto.replaceAll("e","enter");
textoEncriptado = textoEncriptado.replaceAll("i","imes");
textoEncriptado = textoEncriptado.replaceAll("a","ai");
textoEncriptado = textoEncriptado.replaceAll("o","ober");
textoEncriptado = textoEncriptado.replaceAll("u","ufat");

console.log(textoEncriptado);
//mandar el resultado a la salida