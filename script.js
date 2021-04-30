
///adicionar evento para quando clicar chamar uma função anonima que chame o botão e troque o texto dele 
var chamarBotao1 = document.getElementById("botao1")
var chamarBotao2 = document.getElementById("botao2")
var escolhaBase = document.getElementById("cod")
var opcaoCod = document.getElementById("btncodificar")
var opcaoDescod = document.getElementById("btndescodificar")
var mensagem = ''
var inserirIncremento = document.getElementById("incremento")


chamarBotao1.addEventListener('click', ()=>{
        
    if(opcaoCod.checked == true){ //se codificar estiver selecionado//
        mensagem = document.getElementById("mensagem").value
        var textcodf = btoa(mensagem);
        document.getElementById("mensagemTraduzida").innerText = textcodf
    }

    else {
        var inserirIncremento2 = parseInt(inserirIncremento.value);
        var arr1 = [];
        var arr2 = [];
        var mensagemCod = '';
        mensagem = document.getElementById('mensagem').value
        var msgdesmembrada = mensagem.split('')
        for(var i = 0; i < msgdesmembrada.length; i++){
            arr1.push(texto.charCodeAt(i)+ inserirIncremento2) 
            arr2.push(String.fromCharCode(arr1[i]))
            mensagemCod = arr2.join("")
        }
        document.getElementById("mensagemTraduzida").textContent = mensagemCod
        }
    }
)

            
           
chamarBotao2.addEventListener('click', ()=>{        
    if(opcaoDescod.checked == true){
        mensagem = document.getElementById('mensagem').value
        var codificado = atob(mensagem);
        document.getElementById("mensagemTraduzida").textContent = codificado
        }               

    else {
        var inserirIncremento3 = parseInt(inserirIncremento.value);
        var arr1 = [];
        var arr2 = [];
        var mensagemCod = '';   
        mensagem = document.getElementById('mensagem').value
        var msgdesmembrada = mensagem.split('')
            for(var i = 0; i < msgdesmembrada.length; i++){
            arr1.push(mensagem.charCodeAt(i)- inserirIncremento3) 
            arr2.push(String.fromCharCode(arr1[i]))
            mensagemCod = arr2.join("")
            }
                    
        document.getElementById('mensagemTraduzida').textContent = mensagemCod
        }            
    }            
)

var surgeIncrementoCezar= escolhaBase.addEventListener('change', ()=>{ ///ofertar incremento se opção cifra de Cezar
    if(escolhaBase.value == 2){
        document.getElementById("cifra").classList.remove("cifra-Cezar")
    }
    else{
        document.getElementById("cifra").classList.add("cifra-Cezar")
    }
} )


                