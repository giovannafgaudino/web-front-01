//console.log('Para o formulário funcionar, digite no campo CPF')
const buttonMedicamentos = document.querySelector("#medicamentos");
const remedios = document.querySelector(".remedios");

// criando um elemento p 
const pMensagem = document.createElement("p"); 

//variaveis para validação
// # para 'id'
// . para 'class' 
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEnviar = document.querySelector("button");

function clearForm (){
    campoNome.value = '';
    campoCidade.value = '';
}
//função da validação
buttonEnviar.addEventListener("click", function(event){
// condições para o preenchimento do campo 
    event.preventDefault();
    if (campoNome.value === ''){
        // this.textContent responsável por enviar um texto na tela
        pMensagem.textContent = "CAMPO OBRIGATÓRIO";
        // insertAdjacentElement serva para posicionar a mensagem
        campoNome.insertAdjacentElement("afterend", pMensagem);

        pMensagem.setAttribute("class", "erro");
        // alert("Preencha seu nome."); 
        return false
    }
    if (campoCidade.value === ''){
        pMensagem.textContent = "CAMPO OBRIGATÓRIO";
        campoCidade.insertAdjacentElement("afterend", pMensagem);
        // alert("Preencha sua cidade."); 
        return false
    }
    pMensagem.classList.add('d-none');
    clearForm();
    
});


// chamando medicamentos

buttonMedicamentos.addEventListener("click", function(){
    remedios.classList.add("d-block")
})
