import Habilidades from "../Habilidades/Habilidades";
import InfosPessoais from "../InfosPessoais/InfosPessoais";
import Formulario from "../Formulario/Formulario";

function MainConteudos() {
  const usuarios = [
    {
      nome: "Giovanna",
      email: "giovanna@exemplo.com",
      telefone: "(11)954662815",
    },
  ]

  return (
    <>
      <section className="mainInfo">
        <InfosPessoais usuarios={usuarios} />
        <Habilidades habilidade="HTML" nivel="Avançado" />
      </section>
      <section id="contact">
        <Formulario />
      </section>
    </>
  );
}

export default MainConteudos;
