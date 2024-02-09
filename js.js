/// IMC = peso (kg) / altura**2

campoPeso = document.querySelector('#peso');
campoAltura = document.querySelector('#altura');
buttonCalcular = document.querySelector('#Calcular');
const mensagem = document.createElement('m')
const peso = ' '
const altura = ' '

function clearForm(){
    campoPeso.value = ' '
    campoAltura.value = ' '
}

function calcularIMC () {
    let IMC = peso / altura**2
    console.log(IMC)
}

buttonCalcular.addEventListener('click'), function (event){
    if event.preventDefault()
    if (campoPeso.value===''){
        m.textContent = 'Campo obrigatório!';
        campoPeso.insertAdjcentElement('afterend', mensagem);
        
    }
}
