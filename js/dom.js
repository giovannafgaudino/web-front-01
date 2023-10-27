/*function teste(arg1,arg2) {
    alert("Olá")
    console.log(arg1+arg2);
}



function imprimeNome(name){
    console.log(`Meu nome é ${name}`);
}
imprimeNome('Giovanna');

teste(7,1);
*/

/*function cliqueAqui(){
    alert('olá!');      //criando função para evento
}*/

//Crianda variavel 
const Sim = document.querySelector(".Sim"); // DOM 
const Nao = document.querySelector(".Nao");
const card = document.querySelector(".card");

Sim.addEventListener("click", function(){       /*Criando evento em JS*/
    alert("Mágica, sumiu!")
    card.style.display = "none";     /*ao clicar no botão SIM o dispay desaparece*/
});      

Nao.addEventListener("click", function(){      
    alert("Mágica, apareceu!")
    card.style.display = "block";
});   
