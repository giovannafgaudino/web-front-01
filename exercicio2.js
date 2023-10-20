/* 02- 
- Escreva um loop (for ou while) que exiba a frase abaixo no console; 
- Substitua o "X" pela informação correta; 
- "X" deve começar em 1 na 1º exibição e em 10 na última; 
- Exiba a frase 10x no console.
*/

//Utilizando o 'FOR':
for (i = 0; i < 10; i++){
    console.log(`Você tem ${i + 1} falta(s).`);
}


//Utilizando o WHILE: 
let i = 0; 
while (i < 10){
    console.log(`Você tem ${i + 1} falta(s).`);
    i++
}