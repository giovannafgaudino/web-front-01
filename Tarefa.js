/* 03 - 
- Abaixo da consante 'cities', delcare uma let "uppercaseCities" e atribua à ela um array vazio; 
- Adicione no array que a "upperCaseCities" armazena as cidades do array cities com todas as letras maiúsculas,
utilizanod um loop; 
- Para ver se deu certo, exiba o uppercaseCities no console. 
*/

const cities = ['São Paulo', 'Rio Janeiro', "Belo Horizonte", "Fortaleza"];
let uppercaseCities = [];

for (let i = 0; i < cities.length; i++) {
    uppercaseCities.push(cities[i].toUpperCase());
}
console.log(uppercaseCities);
