//CONDIÇÃO '&&' E '||'
//EXEMPLO 1
let valor = 15;
//para que seja válido a condição 'e', todas as condições devem ser verdadeiras.
if(valor > 10 && valor < 20){
    console.log('Este valor é válido.');
}

//EXEMPLO 2
//para que seja válido na condição 'ou', basta que apenas UMA condição seja verdadeira. 
let valor = 15;
if(valor > 10 || valor < 20){
    console.log('Este valor é válido.');
}