
import './App.css'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
import MainConteudos from './Componentes/MainConteudos/MainConteudos'
import Formulario from './Componentes/Formulario/Formulario'
import Rodape from './Componentes/Rodape/Rodape'

function App() {

  return (
    <>
      <Cabecalho/>
      <section id='info'>
        <MainConteudos/>
      </section>
      <section id='contact'>
        <Formulario/>
      </section>
      <Rodape/>
    </>
  )
}

export default App
