import Habilidades from '../Habilidades/Habilidades'
import InfosPessoais from '../InfosPessoais/InfosPessoais'
import Formulario from '../Formulario/Formulario'


function MainConteudos(){
    return(
        <>
        <InfosPessoais/>
        <section id='contact'>
        <Formulario/>
        </section>
        <Habilidades/>
        </>
    )
}

export default MainConteudos