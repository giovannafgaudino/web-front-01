import React, { useState } from 'react'
import Alegria from '../images/alegria.jpg'
import Raiva from '../images/raivoso.jpg'
import Medo from '../images/medo.jpg'
import Tristeza from '../images/tristeza.jpg'

function Portal() {

    const [isExameChecked, setIsExameChecked] = useState(false);
    const [isConsultaChecked, setIsConsultaChecked] = useState(false);
    const [message, setMessage] = useState('');
    const handleExameChange = () => {
        setIsExameChecked(!isExameChecked);
    };
    const handleConsultaChange = () => {
        setIsConsultaChecked(!isConsultaChecked);
    }
    const handleClick = (msg) => {
        setMessage(msg);
    }

    return (
        <>
            <main className='PortalContent'>
                <section className="mainInfo ">
                    <section className='content'>
                        <div id="portal-paciente" class="">
                            <div id="portal">
                                <h1>Acesse o Portal do Paciente para ter acesso a: </h1>
                                <ul>
                                    <li>Agendar exames e consultas</li>
                                    <li>Encontrar um médico perto de você</li>
                                    <li>Acessar o seu prontuário</li>
                                    <li>Consultar seu histórico médico</li>
                                </ul>
                            </div>
                            <div className='forms'>
                                <form>
                                    <label class="form-box">
                                        <input type="number" id="CPF" placeholder="Digite o seu CPF" />
                                    </label>
                                    <label>
                                        <input type="number" id="NUM" placeholder="Digite o número da carteirinha" />
                                    </label>
                                    <button>ACESSAR</button>
                                </form>

                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="avaliation" className=''>
                            <div>
                                <h1>
                                    Como foi a sua passagem no Hospital das Clínicas?
                                </h1>
                                <p>Avalie neste campo como foi a sua experiência no nosso hospital</p>
                                <h4>Motivo da visita?</h4>
                                <div className='checkboxes'>
                                    <label id="checkbox-box">
                                        <input type="checkbox" id="checkbox-box-exame" checked={isExameChecked} onChange={handleExameChange} />
                                        <span class="checkmark"> Exame </span>
                                    </label>
                                    <label id="checkbox-box">
                                        <input type="checkbox" id="check-box-consulta" checked={isConsultaChecked} onChange={handleConsultaChange} />
                                        <span class="checkmark"> Consultas </span>
                                    </label>
                                </div>

                                {isExameChecked && (
                                    <div id="exame-container" class="exame-container ">
                                        <h4>Qual exame realizou?</h4>
                                        <div className='exame-container-checkbox'>
                                            <label id="checkbox-exames">
                                                <input type="checkbox" />
                                                <span class="checkmark"> Exame de Sangue </span>
                                            </label>
                                            <label id="checkbox-exames">
                                                <input type="checkbox" />
                                                <span class="checkmark"> Ultrassografia </span>
                                            </label>
                                            <label id="checkbox-exames">
                                                <input type="checkbox" />
                                                <span class="checkmark"> Tomografia </span>
                                            </label>
                                            <label id="checkbox-exames">
                                                <input type="checkbox" />
                                                <span class="checkmark"> Raio X </span>
                                            </label>
                                            <label id="checkbox-exames">
                                                <input type="checkbox" />
                                                <span class="checkmark"> Ressonância Magnética (RM) </span>
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {isConsultaChecked && (


                                    <div id="checkbox-consultas" class="checkbox-consultas ">
                                        <input type="text" id='box-consulta' placeholder="Digite a especiliadade médica" />
                                        <input type="date" name="Date" id="box-consulta" />
                                    </div>
                                )}
                                <div id="avaliation-box">
                                    <p>Como o paciente se sentiu durante na situação?</p>
                                    <div id="btn-avaliation">
                                        <button onClick={() => handleClick('Obrigado pela sua avaliação! Você escolheu Alegria!')}>
                                            <img src={Alegria} alt="Botão Alegria" />
                                        </button>
                                        <button onClick={() => handleClick('Obrigado pela sua avaliação! Você escolheu Medo!')}>
                                            <img src={Medo} alt="Botão Medo" />
                                        </button>
                                        <button onClick={() => handleClick('Obrigado pela sua avaliação! Você escolheu Raiva!')}>
                                            <img src={Raiva} alt="Botão Raiva" />
                                        </button>
                                        <button onClick={() => handleClick('Obrigado pela sua avaliação! Você escolheu Tristeza!')}>
                                            <img src={Tristeza}
                                                alt="Botão Tristeza" />
                                        </button>
                                    </div>
                                </div>
                                {message && (
                                    <div id="agradecimento" class="agradecimento">
                                        <p>{message}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Portal;