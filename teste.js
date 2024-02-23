//usuário precisa informar peso e altura 
// cálculo IMC - peso / altura²
const prompt = require('prompt-sync')() //para conseguir obter infos do usuário

function getUserInfos(){
    let weight = parseFloat(prompt ("Digite seu peso: "));
    let height = parseFloat(prompt('Digite é sua altura?'));
    // let peso = 5 
    // let altura = 10

    // console.log(peso, altura)

    //objeto: para returnar mais de umas informação 
    return {
        userWeight: weight, 
        userHeight: height
    }
}

//parâmetros: 
function imc (pesoInformado, alturaInformada) {
//function imc (pesoInformado = 80) serve para pré-determinar o valor para o parâmetro, em casos em que os usuários não informe a info. 
    return pesoInformado / alturaInformada**2 
}

function main (){
    let weight = getUserInfos().userWeight;
    let height = getUserInfos().userHeight;

    let imcCalculo = imc(weight, height);

    console.log(`O seu IMC é ${imcCalculo} e sua faixa é `)
}

main()

function imprimir(){
console.log(a)
    return a 
}
imprimir()


//Outro modo de declarar função
const imprimir = (a) => {console.log(a)}
imprimir()

//função anônima: executa ao realizar o evento
btn1.addEventListener('click', fuction clicar (){  })

//função anônima: executa ao realizar o evento, só é necessário quando executar uma vez. 
btn1.addEventListener('click', ()=>{  })