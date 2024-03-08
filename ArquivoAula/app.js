// document.cookie = 'username=Giovanna';
// document.cookie2 = 'username=Giovanna; expires=Fri, 08 March 2024 8:40:00 UTC';
// document.cookie3 = 'username=Giovanna; expires=Fri, 08 March 2024 8:40:00 UTC; path=/';

localStorage.setItem("nome", 'Giovanna');
console.log(localStorage.getItem('nome'));
// localStorage.removeItem('nome');

//sessionStorage.clear

let nome = ['Giovanna', 'Bia'];
const nomeJson = JSON.stringify(nome); 
localStorage.setItem('nomes', nomeJson); 
JSON.parse(localStorage.getItem('nome'));