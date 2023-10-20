let frutas = ['Maça', 'Banana', 'Uva', 'Pera']
console.log(frutas.length);              // Exibe quantos ''índices'' há no array 
console.log(frutas);                        // exibe o conteúdo do array em forma de array 

for (let i = 0; i <frutas.length; i++){     // legth --> conta quantos índice há no array
    console.log(frutas[i]);
}

for (let i = 0; i < frutas.length; i++){
    console.log(`- ${frutas[i]}`);  //colocar texto junto com a variável 
}

