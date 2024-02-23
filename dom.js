const divListaFilmes = document.querySelector('#listaFilmes');
const btn1 = document.querySelector('button'); 
const itemLista = document.createElement('li');
const inputTexto = document.querySelector('#filmeInput')

btn1.addEventListener('click', ()=>{
    //window.alert('Hello');
    divListaFilmes.append(itemLista);
    // itemLista.innerHTML = 'Azul';
    itemLista.innerHTML = inputTexto.value;
})