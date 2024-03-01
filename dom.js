//const divListaFilmes = document.querySelector('#listaFilmes');
//let filmes = ['O diabo veste Prada', 'Ferrari', 'Como perder um homem em 10 dias', 'Barbie'];
let filmes = [{
    nome:'O diabo veste Prada',
    lancamento: 2004,
    rating: 10 

}, {
    nome: 'Ferrari',
    lancamento: 2024,
    rating: 8
}, {
    nome: 'Como perder um homem em 10 dias' ,
    lancamento: 2003,
    rating: 8
}, {
    nome: 'Barbie' ,
    lancamento: 2023,
    rating: 8
}]


//adicionar o elemento ao final:
filmes.push('Senhor dos Anéis');
//remover o elemento final:
filmes.pop();


// window.onload = ()=>{  //arrow function
//     // for (contador; condição; )
//     for(let i=0; i<filmes.length; i++){
//         let listaItem = document.createElement('li');
//         divListaFilmes.append(listaItem);
//         //adicionar os elementos no HTMl 
//         listaItem.innerHTML = filmes[i].nome;
        
//         let listaLancamento = document.createElement('li');
//         divListaFilmes.append(listaLancamento);
//         listaLancamento.innerHTML = `Data de lançamento: ${filmes[i].lancamento}`;
//     }
// }
//forEach - assume o valor de cada elemento:
filmes.forEach((i)=>{
    //neste caso assume o valor do objeto e logo depois ele assume o valor 'nome' do objeto
    console.log(i.nome)
})

//.map - cria um array  
filmes.map((i)=>{
    console.log(i.nome + "- categoria: comédia ")
})

//.filter - função de filtrar através de uma condição 
filmes.filter((i)=>{
    
})