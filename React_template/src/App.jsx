import './App.css'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
import Rodape from './Componentes/Rodape/Rodape'
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
      <Cabecalho texto="Giovanna"/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
