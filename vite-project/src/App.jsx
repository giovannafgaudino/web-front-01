import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [contador, setContador] = useState(0)
  //useState utilizado para atualizar a informação na tela
  // let contador = 5;
  const [photos, setPhotos] = useState([])
  function aumentar(){
    setContador(contador + 1)
    //console.log(contador)
  }
  function diminuir(){
    setContador(contador - 1)
    // console.log(contador)
  }
  function zerar(){
    setContador(0)
    //console.log(contador)
  }
  useEffect(()=>{
  //utiliza-se o fetch para pegar dados de uma API
  fetch('https://jsonplaceholder.typicode.com/photos')
  //pegando os dados e transformando em json
  .then(response => response.json())
  //enviando os dados no console 
  .then(data => setPhotos(data))
  }, [])

  return (
    <>
    <h1>Contador</h1>
    <p>{contador}</p>
    <div>
    <button id='soma' onClick={aumentar}>Aumentar</button>
    <button id='substrair' onClick={diminuir}>Diminuir</button>
    <button id='zerar' onClick={zerar}>Zerar</button>
    </div>
    <h1>Fotos</h1>
    {photos.map((element)=>(
      <img key={element.id} src={element.url} alt={element.tie} width={100}/>
    ))}
    </>
      
  )
}

export default App
