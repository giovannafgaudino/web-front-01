import './App.css'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
import MainConteudos from './Componentes/MainConteudos/MainConteudos'
import Formulario from './Componentes/Formulario/Formulario'
import Rodape from './Componentes/Rodape/Rodape'
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
