//textareas
const inputText = document.getElementById("user-input");
const resultText = document.getElementById("output-result");

///botones
const encryptBtn = document.getElementById("encrypt-btn");
const decrypBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");

//contenedores
const outputMsg = document.querySelector(".output-msg-container");
const outputResult = document.querySelector(".output-result-container");


//funcion para ocultar/mostrar elementos
const showElements = function(){
    outputMsg.classList.toggle("no-show");
    outputResult.classList.toggle("no-show");
};

//funcion para encriptar/desencriptar texcto

const encryptText = function(str){
    let textoEncriptado;
    textoEncriptado = str.replaceAll("e","enter");
    textoEncriptado = textoEncriptado.replaceAll("i","imes");
    textoEncriptado = textoEncriptado.replaceAll("a","ai");
    textoEncriptado = textoEncriptado.replaceAll("o","ober");
    textoEncriptado = textoEncriptado.replaceAll("u","ufat");
    return textoEncriptado;
};

//funcion para desencriptar texto

const decryptText = function(str){
    let textoEncriptado;
    textoEncriptado = str.replaceAll("enter","e");
    textoEncriptado = textoEncriptado.replaceAll("imes","i");
    textoEncriptado = textoEncriptado.replaceAll("ai","a");
    textoEncriptado = textoEncriptado.replaceAll("ober","o");
    textoEncriptado = textoEncriptado.replaceAll("ufat","u");
    return textoEncriptado;
}

//eventos
encryptBtn.addEventListener("click", e => {
   
    if(inputText.value != ""){
        resultText.textContent = encryptText(inputText.value);
        if(!outputResult.classList.contains("no-show"))
            showElements();
    }
    else{
        inputText.classList.add("shake");
    }

    setTimeout(()=>{
        inputText.classList.remove("shake");
      }, 500)

});


decrypBtn.addEventListener("click", e => {
   
    if(inputText.value != ""){
        resultText.textContent = decryptText(inputText.value);
        if(!outputResult.classList.contains("no-show"))
            showElements();
    }
    else{
        inputText.classList.add("shake");
    }

    setTimeout(()=>{
        inputText.classList.remove("shake");
      }, 500)

});


inputText.addEventListener("input", e=>{
    // console.log(!inputText.value)
    if(inputText.value == ""){

        console.log(outputResult.classList.contains("no-show"), outputMsg.classList.contains("no-show"))
        if(outputResult.classList.contains("no-show") || outputMsg.classList.contains("no-show"))
            showElements();
        //     // showElements();
    }
});

copyBtn.addEventListener("click", e=>{

    let clipText = resultText.value;
    navigator.clipboard.writeText(clipText);
    copyBtn.classList.add("anim-tip");

    setTimeout(()=>{
        copyBtn.classList.remove("anim-tip");
    },500);
});

