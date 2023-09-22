
let numFloat = 123.456
console.log(numFloat);
//fazer a conversã de um número decimal para inteiro:
console.log(parseInt(numFloat)); 

//Variável entre aspas = valor de text = string:
let numString = "123.456"; //variável como texto.
console.log(parseFloat(numString));//transformando texto em variável número.

//alterar uma variável float para string:
let num1Float = 145.654;
let num1String = num1Float.toString();
let verificar = typeof num1String;
console.log(verificar);


let nomeAluno1 = "Giovanna";
console.log(nomeAluno1.length); //comando para contar quantas caracteres existem na variável. 


let txt = "Estão chegand as provas";
console.log(txt.indexOf("as")); //verifica o valor da posição do 'termo'


let texto = "Estão chegando as provas";
console.log(texto.lastIndexOf("as")); // verifica o valor da posiçã dos últimos 'termos' (provAS).


console.log(txt.slice(0,5)); //vai pegar os termos nas posições e 0 a 5. 'Estão'


// vai pegar os termos dps de determina posição até outr posição, nesse caso dps 6ª até a 8ª. 
console.log(txt.substr(6,8)); 


