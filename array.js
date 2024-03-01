const numeros = [1, 10, "Oi", "True", {}]
console.log(numeros);

//acessando os elementos do array: 
console.log(numeros[0]);

//desestruturação de um array.
const [numero, numero2, saudaçao, booleano, objeto] = numeros
console.log(booleano)

//Spread e Rest
//...rest = resto 
// ...clone= cria uma copia 


//mundando valor do elemento:
numeros[2]= 'Tchau'
console.log(numeros[2])

//tamanho do array: 
console.log(numeros.length);