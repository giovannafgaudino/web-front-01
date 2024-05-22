import data from '../../../noticias.json';
import infos from '../../../exame.json';
import Apoio01 from '../images/Apoio01.jpg'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import HumanizaLogo from "../SVGs/HumanizaLogo.svg"

function HomeContent() {
  return (
    <main className="HomeInfo">
      <section className='content '>
        <section className='infos-main '>
          <div className="title">
            <h1 className="">Procedimentos</h1>
            <h3>Explicação lúdica-educativa</h3>
          </div>
          <div className='Accordion'>

            <Accordion defaultActiveKey="0">
              {infos.exames.map((info, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header >{info.title}</Accordion.Header>
                  <Accordion.Body >
                    <iframe src={info.video} frameborder="0"></iframe>
                  </Accordion.Body>
                  <Accordion.Body>{info.text}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </section>
        <section className='apoio-psicologico'>
          <div className="card" >
            <h3 className="">Apoio Psicológico</h3>
            <p>Estamos aqui para ajudar você a cuidar da sua saúde!</p>
            
            <h5>Benefícios</h5>
            <ul>
              <li>Aconselhamento Profissional</li>
              <li>Apoio Emocional</li>
              <li>Apoio na adaptação à nova rotina</li>
              <li>Melhoria da Qualidade de vida</li>
            </ul>
            <img src={Apoio01} alt="" />
            {/* <p >
              O acompanhamento psicológico é muito importante no contexto de doenças, tanto para o paciente quanto para os acompanhantes.
              O diagnóstico e tratamento podem trazer muitos sentimentos, como o medo, a ansiedade, a tristeza e frustações.
              Muitas das vezes é preciso ter alterações na rotina, alguns pacientes e acompanhantes precisam passar muito tempo dentro de hospitais,
              que pode afetar no trabalho e nos estudos.
            </p> */}
            <div className='btns'>
              <button href='#' className="">Agende já uma sessão!</button>
            </div>
          </div>


          <div className="card" >
            <h3 >Campanhas</h3>
            <p>Transforme empatir em ação tangível. Junte-se a nós para criar um impato duradouro.</p>
            <img src={HumanizaLogo} alt="" />
            {/* <p>
              Campanhas são oportunidades de transformar empatia em ação
              tangível. Seja apoiando iniciativas locais, ajudando indivíduos em
              necessidade ou impulsionando projetos comunitários, cada contribuição é um passo em direção a um futuro mais solidário e compassivo.
              Não espere para ser parte da mudança que deseja ver no mundo.
            </p>
            <p>
              Explore nossas campanhas, contribua, compartilhe e inspire-se. Juntos,
              podemos transformar vidas e criar um impacto duradouro. Faça a diferença agora, junte-se à nossa comunidade de mudança positiva!
            </p> */}
            <div className='btns'>
              <button href="#" className=""> Saiba Mais! </button>
            </div>
          </div>


        </section>
        <section className='noticias'>
          <Carousel className='noticias-main'>
            {data.noticias.map((noticia, index) => (
              <Carousel.Item interval={5000} key={index} className='noticias-box'>
                <h3>{noticia.title}</h3>
                <p className='descrition text-muted'>{noticia.descrition}</p>
                <div className='noticia-image'>
                  <img src={noticia.image} alt="" />
                </div>
                <p>{noticia.text}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </section>
    </main >
  )

}
export default HomeContent