// Arquivo o qual fica o nosso JavaScript

/*
let textoOriginal = document.getElementById("titulo").textContent

document.getElementById("botao-trocar-texto").addEventListener("click", function() {
    let titulo= document.getElementById("titulo"); //.textContent = "Texto Trocado";
    debugger
    if(titulo.textContent === " Texto trocado! "){
        titulo.textContent = textoOriginal;
    }
    else{
        textoOriginal= titulo.textContent;
        titulo.textContent = "Texto trocado!"
    }
})    */

$(document).ready(function(){
    $("#botao-trocar-texto").on("click", function(){
    let titulo= document.getElementById("titulo")
        debugger
        if(titulo.textContent === "Texto trocado!" ){
            titulo.textContent = textOriginal;
        }
        else{
            textoOriginal= titulo.textContent;
            titulo.textContent = "Texto Trocado!"
        }
    })


    let corAtualBranco = true;
    // Atribuir função de trocar cor
    $("#botao-trocar-cor").on("click", function(){
        if(corAtualBranco){
            $('body').css("background-color", "red")
        }
        else{
            $('body').css("background-color", "white")
        }
        corAtualBranco =! corAtualBranco
    })

// Pegar o input e trocar o texto
    $("#botao-alterar-texto").on("click", function(){
        let novoTexto =$('#input-novo-texto').val()
        
        if(novoTexto){
            $("#titulo").text(novoTexto)
        }
        else{
            alert("Por Favor, insira um texto.")
        }
    })



}) 
